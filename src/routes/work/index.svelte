<script>
	// import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	// import { app } from '../../firebase';
	// @ts-ignore
	import works from '$lib/assets/data/Work.json';
	import { fade, fly } from 'svelte/transition';
	import { t } from '$lib/locales/i18n';
	let animate = false;

	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	onMount(() => {
		animate = true;
		// const analytics = getAnalytics(app);
		// logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>Work History</title>
	<meta name="description" content={`Previous work History of ${$t('name')} `}>
	<meta name="keywords" content="HTML, CSS, JavaScript, React, UI Engineer, Front-End Developer, Front-end Engineer, NodeJS, Svelte , VueJs">
	<meta name="email" content={`${$t('emailLink')} `}>
	<meta name="LinkedIn" content={`${$t('linkedInLink')} `}>
</svelte:head>
<div class="flex items-center min-h-screen hello">
	<Timeline position="alternate">
		{#each works as work, i}
			<TimelineItem style="margin:15px 0">
				<TimelineOppositeContent slot="opposite-content">
					{#if animate}
						<p in:fly|local={{ x: 1000, duration: 1500 }} class="text-neutral">
							{work.year_start + '-' + work.year_end}
						</p>
						<p in:fade|local={{ delay: 1500, duration: 1500 }} class="font-secondary">
							{work.job_title}
						</p>
					{/if}
				</TimelineOppositeContent>
				<TimelineSeparator>
					{#if animate}
						<span in:fly|local={{ delay: 250, y: (-1000 / 2) * (i + 1), duration: 1500 }}>
							<TimelineDot
								style={`background-color: ${i % 2 == 0 ? 'var(--accent)' : 'var(--light)'};`}
							/>
						</span>
					{/if}

					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					{#if animate}
						<h3
							in:fly|local={{ x: -1500, duration: 2000 }}
							class="text-accent font-bold font-secondary"
						>
							{work.company}
						</h3>
					{/if}
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
