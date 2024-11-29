<script lang="ts">
import TaskManagerActions from './TaskManagerActions.svelte';
import type { TaskInfoUI } from '/@/stores/tasks';

export let object: TaskInfoUI;
</script>

<TaskManagerActions task={object} />
