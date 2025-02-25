import ImageUploader from "@/components/ImageUpload";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen ">
          <div className="min-h-screen flex justify-center items-center">
              <ImageUploader/>
          </div>
      </main>
    </>
  );
}
