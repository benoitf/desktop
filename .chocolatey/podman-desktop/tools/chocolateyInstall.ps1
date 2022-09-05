$ErrorActionPreference = 'Stop'

$packageArgs = @{
  packageName    = 'podman-desktop'
  fileType       = 'exe'
  softwareName   = 'PodmanDesktop'

  url64bit       = 'https://github.com/containers/podman-desktop/releases/download/v0.0.6/podman-desktop-0.0.6-setup.exe'
  checksumType   = 'sha256'
  checksum64     = '26c6a120ec8aabbde151e8400a823bfede474fb4d152cd409579250d2e2ddc72'

  silentArgs     = '/S'
  validExitCodes = @(0)
}

Install-ChocolateyPackage @packageArgs
