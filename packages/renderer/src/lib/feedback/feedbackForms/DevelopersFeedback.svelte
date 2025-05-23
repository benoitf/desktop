<script lang="ts">
import {
  faFrown,
  faGrinStars,
  faHeart,
  faMeh,
  faQuestionCircle,
  faSmile,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Button, ErrorMessage, Link } from '@podman-desktop/ui-svelte';
import Fa from 'svelte-fa';

import FeedbackForm from '/@/lib/feedback/FeedbackForm.svelte';
import type { FeedbackProperties } from '/@api/feedback';

import WarningMessage from '../../ui/WarningMessage.svelte';

interface Props {
  onCloseForm: (confirmation: boolean) => void;
  contentChange: (e: boolean) => void;
}

// feedback of the user
let smileyRating = $state(0);
let tellUsWhyFeedback = $state('');
let contactInformation = $state('');
let hasFeedback = $derived(
  (tellUsWhyFeedback && tellUsWhyFeedback.trim().length > 4) ||
    (contactInformation && contactInformation.trim().length > 4),
);

let { onCloseForm, contentChange }: Props = $props();

$effect(() => contentChange(Boolean(smileyRating || tellUsWhyFeedback || contactInformation)));

function selectSmiley(item: number): void {
  smileyRating = item;
}

async function sendFeedback(): Promise<void> {
  const properties: FeedbackProperties = {
    category: 'developers',
    rating: smileyRating,
  };

  if (tellUsWhyFeedback) {
    properties.comment = tellUsWhyFeedback;
  }

  if (contactInformation) {
    properties.contact = contactInformation;
  }

  // 1. send the feedback
  await window.sendFeedback(properties);

  // 2. close the form without confirmation
  onCloseForm(false);

  // 3. Display confirmation dialog
  await window.showMessageBox({
    title: 'Thanks for your feedback',
    message: 'Your input is valuable in helping us better understand and tailor Podman Desktop.',
    type: 'info',
    buttons: ['OK'],
  });
}

async function openGitHub(): Promise<void> {
  onCloseForm(false);
  await window.telemetryTrack('feedback.openGitHub');
  await window.openExternal('https://github.com/containers/podman-desktop');
}
</script>

<FeedbackForm>
  <svelte:fragment slot="content">
    <label for="smiley" class="block mt-4 mb-2 text-sm font-medium text-[var(--pd-modal-text)]"
      >How was your experience with Podman Desktop?</label>
    <div class="flex space-x-4">
      <button aria-label="very-sad-smiley" onclick={(): void => selectSmiley(1)}>
        <Fa
          size="1.5x"
          class="cursor-pointer {smileyRating === 1
            ? 'text-[var(--pd-button-primary-bg)]'
            : 'text-[var(--pd-button-disabled-text)]'}"
          icon={faFrown} />
      </button>
      <button aria-label="sad-smiley" onclick={(): void => selectSmiley(2)}>
        <Fa
          size="1.5x"
          class="cursor-pointer {smileyRating === 2
            ? 'text-[var(--pd-button-primary-bg)]'
            : 'text-[var(--pd-button-disabled-text)]'}"
          icon={faMeh} />
      </button>
      <button aria-label="happy-smiley" onclick={(): void => selectSmiley(3)}>
        <Fa
          size="1.5x"
          class="cursor-pointer {smileyRating === 3
            ? 'text-[var(--pd-button-primary-bg)]'
            : 'text-[var(--pd-button-disabled-text)]'}"
          icon={faSmile} />
      </button>
      <button aria-label="very-happy-smiley" onclick={(): void => selectSmiley(4)}>
        <Fa
          size="1.5x"
          class="cursor-pointer {smileyRating === 4
            ? 'text-[var(--pd-button-primary-bg)]'
            : 'text-[var(--pd-button-disabled-text)]'}"
          icon={faGrinStars} />
      </button>
    </div>

    <label for="tellUsWhyFeedback" class="block mt-4 mb-2 text-sm font-medium text-[var(--pd-modal-text)]"
      >Tell us why, or share any suggestion or issue to improve your experience: ({1000 - tellUsWhyFeedback.length} characters
      left)</label>
    <textarea
      rows="3"
      maxlength="1000"
      name="tellUsWhyFeedback"
      id="tellUsWhyFeedback"
      data-testid="tellUsWhyFeedback"
      bind:value={tellUsWhyFeedback}
      class="w-full p-2 outline-hidden text-sm bg-[var(--pd-input-field-focused-bg)] rounded-xs text-[var(--pd-input-field-focused-text)] placeholder-[var(--pd-input-field-placeholder-text)]"
      placeholder="Please enter your feedback here, we appreciate and review all comments"></textarea>

    <label for="contactInformation" class="block mt-4 mb-2 text-sm font-medium text-[var(--pd-modal-text)]"
      >Share your contact information if you'd like us to answer you:</label>
    <input
      type="email"
      name="contactInformation"
      id="contactInformation"
      bind:value={contactInformation}
      placeholder="Enter email address, or leave blank for anonymous feedback"
      class="w-full p-2 outline-hidden text-sm bg-[var(--pd-input-field-focused-bg)] rounded-xs text-[var(--pd-input-field-focused-text)] placeholder-[var(--pd-input-field-placeholder-text)]" />
  </svelte:fragment>
  <svelte:fragment slot="validation">
    {#if smileyRating === 0}
      <ErrorMessage class="text-xs" error="Please select an experience smiley" />
    {:else if smileyRating === 1 && !hasFeedback}
      <ErrorMessage class="text-xs" error="Please share contact info or details on how we can improve" />
    {:else if smileyRating === 2 && !hasFeedback}
      <WarningMessage class="text-xs" error="We would really appreciate knowing how we can improve" />
    {:else if smileyRating > 2}
      <div class="text-[var(--pd-modal-text)] p-1 flex flex-row items-center text-xs">
        <Fa size="1.125x" class="cursor-pointer" icon={faQuestionCircle} />
        <span aria-label="Like Podman Desktop? Give us a star on GitHub" class="flex items-center">
          <Fa class="px-1 text-[var(--pd-invert-content-info-icon)]" icon={faHeart} />{smileyRating === 3 ? 'Like' : 'Love'} It? Give us a <Fa
            class="px-1 text-[var(--pd-state-warning)]"
            icon={faStar} />on <Link aria-label="GitHub" on:click={openGitHub}>GitHub</Link>
        </span>
      </div>
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="buttons">
    <Button disabled={smileyRating === 0 || (smileyRating === 1 && !hasFeedback)} on:click={sendFeedback}
    >Send feedback</Button>
  </svelte:fragment>
</FeedbackForm>
