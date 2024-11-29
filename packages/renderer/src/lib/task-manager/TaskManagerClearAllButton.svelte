<script lang="ts">
import { Button } from '@podman-desktop/ui-svelte';
import { clearNotifications } from '/@/stores/tasks';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
</script>

<Button icon={faTrashCan} on:click={clearNotifications}>Clear all</Button>
