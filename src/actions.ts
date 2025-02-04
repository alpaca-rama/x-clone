'use server';

import { imageKit } from "./utils";

interface ShareActionProps {
  formData: FormData;
  settings: {
    type: 'original' | 'wide' | 'square';
    sensitive: boolean;
  };
}

export async function shareAction({ formData, settings }: ShareActionProps) {
  const file = formData.get('file') as File;
  // const description = formData.get('description') as string;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${settings.type === 'square'
    ? 'ar-1-1' : settings.type === 'wide'
      ? 'ar-16-9'
      : ''
    }`;

  imageKit.upload({
    file: buffer,
    fileName: file.name,
    folder: '/x-clone/posts',
    ...(file.type.includes('image') && {
      transformation: {
        pre: transformation,
      },
    }),
    customMetadata: {
      sensitive: settings.sensitive,
    }
  },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};