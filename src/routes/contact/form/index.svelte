<script>
import Form from "$lib/components/organisms/Form.svelte";
import { t } from '$lib/locales/i18n';	

</script>

<svelte:head>
	<title>Contact Form for {$t('name')}</title>
	<meta name="description" content={`Fill the form to contact ${$t('name')} `}>
</svelte:head>

<div class="max-w-xl mx-auto h-[90vh]">
  <Form/>
</div>