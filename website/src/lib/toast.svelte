<script lang="ts">
    export let message: string;
    export let type: 'success' | 'error' | 'info' = 'info';
    export let duration: number = 3000;
    export let show: boolean = false;

    let visible = show;

    $: if (show) {
        visible = true;
        setTimeout(() => {
            visible = false;
        }, duration);
    }
</script>

{#if visible}
    <div class="toast toast-center">
        <div class="alert {type === 'success' ? 'alert-success' : type === 'error' ? 'alert-error' : 'alert-info'}">
            <span>{message}</span>
        </div>
    </div>
{/if} 