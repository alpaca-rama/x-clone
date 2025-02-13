import { imageKit } from "@/utils";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

export default async function Post() {
  async function getFileDetails(fieldId: string): Promise<FileDetailsResponse> {
    return new Promise(function (resolve, reject) {
      imageKit.getFileDetails(fieldId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails('67a253e0432c476416f6b94a');

  console.log(fileDetails);


  return (
    <div className={'p-4 border-y-[1px] border-borderGray'}>
      {/* POST TYPE */}
      <div className={'flex items-center gap-2 text-sm text-textGray mb-2 font-bold'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            fill={'#74767b'}
          />
        </svg>
        <span>Lama Dev reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className={'flex gap-4'}>
        {/* AVATAR */}
        <div className={'relative w-10 h-10 rounded-full overflow-hidden'}>
          <Image
            path={'x-clone/general/avatar.png'}
            alt={'avatar'}
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/* CONTENT */}
        <div className={'flex-1 flex flex-col gap-2'}>
          {/* TOP */}
          <div className={'flex items-center justify-between gap-2'}>
            <div className={'flex items-center gap-2 flex-wrap'}>
              <h2 className={'text-md font-bold'}>Lama Dev</h2>
              <span className={'text-textGray'}>@lamaWebDev</span>
              <span className={'text-textGray'}>1 day ago</span>
            </div>
            <PostInfo />
          </div>ds
          {/* TEXT & MEDIA */}
          <p className={''}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam facere corporis, quae voluptas sint minus blanditiis, accusantium vitae tempora ab ullam atque odio beatae veritatis iste veniam, dicta illum?
          </p>
          {/* <Image
            path={'x-clone/general/post.jpeg'}
            alt={'post image'}
            w={600}
            h={600}
          /> */}

          {fileDetails && fileDetails.fileType === 'image' ? (
            <Image
              path={fileDetails.filePath}
              alt={''}
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
            />
          )}

          <PostInteractions />
        </div>
      </div>
    </div>
  )
}