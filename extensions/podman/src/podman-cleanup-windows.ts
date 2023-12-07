import { process } from '@podman-desktop/api';

import { homedir } from 'node:os';
import { resolve as pathResolve } from 'node:path';
import { AbsPodmanCleanup } from './podman-cleanup-abstract';

export class PodmanCleanupWindows extends AbsPodmanCleanup {
  async stopPodmanProcesses(): Promise<void> {
    // stop wsl machine if it exists
    // first, grab all running wsl machines
    try {
      const wslRunningMachines = await process.exec('wsl', ['--list', '--running', '--quiet']);

      // if there is any running machine
      if (wslRunningMachines.stdout) {
        // each line is a machine
        const wslRunningMachinesLines = wslRunningMachines.stdout.split('\n');

        // for each machine
        for (const machine of wslRunningMachinesLines) {
          // stop it
          await process.exec('wsl', ['--terminate', machine]);
        }
      }
    } catch (error) {
      console.log('unable to list wsl machines. Maybe wsl is not there', error);
    }
  }

  getContainersConfPath(): string {
    return pathResolve(homedir(), 'AppData/Roaming/containers/containers.conf');
  }

  // folders to remove:
  // ~/AppData/Roaming/containers
  // ~/.config/containers
  // ~/.local/share/containers/podman
  getFoldersToDelete(): string[] {
    const configAppDataFolder = pathResolve(homedir(), 'AppData/Roaming/containers');
    const configContainersFolder = pathResolve(homedir(), '.config/containers');
    const localShareContainersFolder = pathResolve(homedir(), '.local/share/containers/podman');
    return [configAppDataFolder, configContainersFolder, localShareContainersFolder];
  }
}
