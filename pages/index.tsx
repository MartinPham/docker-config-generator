import { ReactElement, Ref, forwardRef, useState, useCallback } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import copy from 'copy-to-clipboard'
import base64 from 'base-64'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { useSnackbar } from 'notistack'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { registries } from 'config/registries'
import { Registry } from 'types/Registry'

const SlideUpTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const filter = createFilterOptions<Registry>()


export default function Page() {
  const [registry, setRegistry] = useState<Registry | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [config, setConfig] = useState('')
  const [encodeB64, toggleEncodeB64] = useState(false)

  const [configDialogIsOpen, toggleConfigDialog] = useState(false)

  const closeConfigDialog = useCallback(() => {
    toggleConfigDialog(false)
  }, [])

  const { enqueueSnackbar } = useSnackbar()

  const copyConfig = useCallback(() => {
    copy(config, {
      debug: true,
      format: 'text/plain',
      onCopy: () => {
        enqueueSnackbar('Copied to clipboard', {
          variant: 'success'
        })
      }
    })
  }, [config])

  const generateDockerConfig = useCallback(() => {
    if (email.trim() === '' || password.trim() === '' || (registry !== null && registry.url.trim() === '')) {
      enqueueSnackbar('Missing fields', {
        variant: 'error'
      })
      return
    }
    const auth = base64.encode(`${email}:${password}`)
    let configString = `{
  "auths": {
      "${registry !== null && registry.url}": {
          "auth": "${auth}",
          "email": "${email}",
          "password": "${password}",
      }
  }
}`

    if (encodeB64) {
      configString = base64.encode(configString)
    }

    setConfig(configString)

    toggleConfigDialog(true)
  }, [registry, email, password, encodeB64])

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/featured/?password)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Generate Docker config
            </Typography>
            <Box component="div" sx={{ mt: 1 }}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="registry"
                label="Docker registry"
                name="registry"
                autoComplete="registry"
                autoFocus
                value={registry}
                onChange={event => setRegistry(event.target.value)}
              /> */}
              <Autocomplete
                value={registry}
                onChange={(_, newValue) => {
                  if (typeof newValue === 'string') {
                    setRegistry({
                      url: newValue,
                    });
                  } else if (newValue && newValue.url) {
                    // Create a new value from the user input
                    setRegistry({
                      url: newValue.url,
                    });
                  } else {
                    setRegistry(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.name);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      url: inputValue,
                      name: `Use "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="registry"
                options={registries}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.url) {
                    return option.url;
                  }
                  // Regular option
                  return option.name || '';
                }}
                renderOption={(props, option) => <li {...props}>{option.name}</li>}
                
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label="Docker registry *" />
                )}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" checked={encodeB64} onChange={event => toggleEncodeB64(event.target.checked)} />}
                label="Encode content with Base64"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={generateDockerConfig}
              >
                Generate
              </Button>
              <Typography sx={{ mt: 5 }} variant="body2" color="text.secondary" align="center">
                © Martin Pham - {' '}
                <Link color="inherit" href="https://mph.am/">
                  mph.am
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={configDialogIsOpen}
        TransitionComponent={SlideUpTransition}
        keepMounted
        onClose={closeConfigDialog}
        aria-describedby="config-dialog-description"
      >
        <DialogTitle>Docker Config</DialogTitle>
        <DialogContent sx={{
          padding: 0,
          backgroundColor: 'rgb(30, 30, 30)'
        }}>
          <Button variant="outlined" onClick={copyConfig} sx={{
            position: 'absolute',
            top: 18,
            right: 10
          }}><FileCopyIcon /></Button>
          <SyntaxHighlighter language="json" style={vs2015}>
            {config}
          </SyntaxHighlighter>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfigDialog}>OK</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}