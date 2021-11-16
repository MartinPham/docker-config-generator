import { Registry } from 'types/Registry';

export const registries: readonly Registry[] = [
  {
    name: "Docker Hub",
    url: "registry.hub.docker.com"
  },
  {
    name: "Github",
    url: "ghcr.io"
  },
  {
    name: "Gitlab",
    url: "registry.gitlab.com"
  },
];