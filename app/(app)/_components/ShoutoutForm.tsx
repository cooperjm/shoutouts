'use client';

import { SubmitButton } from '@/components/shared/SubmitButton';

type Props = {
  action: (formData: FormData) => Promise<void>;
};

export function ShoutoutForm({ action }: Props) {
  return (
    <form action={action}>
      <label>
        Name
        <input name="name" required maxLength={100} />
      </label>

      <label>
        Message
        <textarea name="message" required maxLength={1000} />
      </label>

      <SubmitButton>Send</SubmitButton>
    </form>
  );
}
