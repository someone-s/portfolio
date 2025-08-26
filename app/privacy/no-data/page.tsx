import BaseLayout from "@/components/base-layout";

export default function Privacy() {
  return (
    <BaseLayout>
      <div>
        <div id="view-area" className="w-full h-screen">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-[80%] max-w-[1536px] h-[80%]">
              <div className="shadow rounded-xl size-full
                              flex flex-col
                              overflow-hidden">

                <div className="size-full shrink-0 flex flex-col overflow-hidden">
                  <div id="title-background" className="size-full shrink-0 bg-accent border text-accent-foreground p-10">
                    <p>
                      <h1 className="text-2xl">Sned Privacy Policy</h1>
                      <p>No personal data is shared with me or any third party under any circumstance.</p>
                      <p>The app does not access the internet and does not present ads (targeted and non-targeted).</p>
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}