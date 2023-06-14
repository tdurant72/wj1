// import { fail } from '@sveltejs/kit';
import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		const contactFormSchema = object({
			name: string().min(2, 'too short').required('We only accept named users'),
			email: string().required().email(),
			message: string().required()
		});

		try {
			await contactFormSchema.validate({ name, email, message }, { abortEarly: false });

			const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSetiqLPp4LqU2jS8OI6AhfpxHfpXczgurbkDIOLSBdpgE4KJw/formResponse?usp=pp_url&entry.2005620554=${name}&entry.1544096695=${email}&entry.839337160=${message}&submit=Submit`;
			// https://docs.google.com/forms/d/e/1FAIpQLSetiqLPp4LqU2jS8OI6AhfpxHfpXczgurbkDIOLSBdpgE4KJw/viewform?usp=pp_url&entry.2005620554=Tyus+Durant&entry.1544096695=todurant@sublimeux.com&entry.839337160=test
			await fetch(prefilledLink);

			return {
				success: true,
				status: 'Form is submitted'
			};
		} catch (error) {
			console.log({ error });
			const errors = error.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message };
			}, {});

			return {
				errors,
				name,
				email,
				message
			};
		}
	}
};
