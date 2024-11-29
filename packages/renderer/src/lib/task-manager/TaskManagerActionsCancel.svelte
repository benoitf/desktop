<script lang="ts">
import ListItemButtonIcon from '/@/lib/ui/ListItemButtonIcon.svelte';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { withConfirmation } from '/@/lib/dialogs/messagebox-utils';
import type { TaskInfoUI } from '/@/stores/tasks';

const { task }: { task: TaskInfoUI } = $props();

function cancelTask(): void {
  const tokenId = task.cancellationTokenSourceId;
  if (task.cancellable && tokenId) {
    withConfirmation((): Promise<void> => window.cancelToken(tokenId), `Cancel task ${task.name}`);
  }
}
</script>

<ListItemButtonIcon
  title="Cancel task"
  onClick={cancelTask}
  hidden={!task?.cancellable || task?.state === 'completed'}
  icon={faTimesCircle} />
