import { process } from '@podman-desktop/api';

import { homedir } from 'node:os';
import { resolve as pathResolve } from 'node:path';
import { AbsPodmanCleanup } from './podman-cleanup-abstract';

export class PodmanCleanupWindows extends AbsPodmanCleanup {
  async stopPodmanProcesses(): Promise<void> {
    // stop wsl machine if it exists
    // first, grab all running wsl machines
    try {
      const wslRunningMachines = await process.exec('wsl', ['--list', '--running', '--quiet'], {env: {WSL_UTF8: '1'}});

      // if there is any running machine
      if (wslRunningMachines.stdout) {

        console.log('got the wsl list result', wslRunningMachines);
        // each line is a machine
        const wslRunningMachinesLines = wslRunningMachines.stdout.split('/\r?\n');


        console.log('list of machines is', wslRunningMachinesLines);

        // for each wsl being a podman machine, let's remove it
        for (const machine of wslRunningMachinesLines.filter(machine => machine.startsWith('podman-'))) {

          console.log('machine to stop is', machine);
          // stop it
          try {
          await process.exec('wsl', ['--terminate', machine],{env: {WSL_UTF8: '1'}});
          }  catch (error) {
            console.error('error on terminate', error);
          }

        }
      }
    } catch (error) {
      console.log('unable to list wsl machines. Maybe wsl is not there', error);
    }


    // remove all podman wsl machine if it exists
    try {
      const wslAllMachines = await process.exec('wsl', ['--list', '--quiet'], {env: {WSL_UTF8: '1'}});

      // if there is any running machine
      if (wslAllMachines.stdout) {

        console.log('got the wslAllMachines list result', wslAllMachines);
        // each line is a machine
        const wslMachinesLines = wslAllMachines.stdout.split('/\r?\n');


        console.log('list of machines is', wslMachinesLines);

        // for each wsl being a podman machine, let's remove it
        for (const machine of wslMachinesLines.filter(machine => machine.startsWith('podman-'))) {

          console.log('machine to unregister is', machine);
          // remove it
          try {

          await process.exec('wsl', ['--unregister', machine],{env: {WSL_UTF8: '1'}});
          }  catch (error) {
            console.error('error on unregistering', error);
          }

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
