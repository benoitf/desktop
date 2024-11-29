<script lang="ts">
import TaskManagerActionsCancel from './TaskManagerActionsCancel.svelte';
import TaskManagerActionsDelete from './TaskManagerActionsDelete.svelte';
import TaskManagerActionsView from './TaskManagerActionsView.svelte';
import type { TaskInfoUI } from '/@/stores/tasks';

const { task }: { task: TaskInfoUI } = $props();
</script>

<TaskManagerActionsView task={task} />
<TaskManagerActionsCancel task={task} />
<TaskManagerActionsDelete task={task} />
