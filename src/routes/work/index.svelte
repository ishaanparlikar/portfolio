<script>
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { app } from '../../firebase';
	import works from '/static/data/Work.json';

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
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>Work History</title>
</svelte:head>

<Timeline position="alternate">
	{#each works as work, i}
		<TimelineItem style="margin:15px 0">
			<TimelineOppositeContent slot="opposite-content">
				<p class="text-neutral">{work.year_start+'-'+work.year_end}</p>
				<p class="font-secondary">{work.job_title}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot
					style={`background-color: ${i % 2 == 0 ? 'var(--accent)' : 'var(--light)'};`}
				/>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 class="text-accent font-bold font-secondary">{work.company}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>
