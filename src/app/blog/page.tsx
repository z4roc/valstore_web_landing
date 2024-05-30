import Image from "next/image";

export default function Blog() {
  return (
    <main className="mt-32 flex flex-col flex-1 items-start justify-center w-4/5 gap-4">
      <h1 className="text-4xl font-bold">Blog - How does ValStore work?</h1>
      <section id="intro">
        <h1 className="text-2xl font-bold">What is Valstore?</h1>
        <span>
          ValStore is an open source Valorant Shop viewer containing VALORANTs
          daily, accessory and Night Market shop. <br />
          This project is not affiliated with Riot Games. You can find the
          entire source code on GitHub.
          <br />
          For building the app I used an inoffical api provided by{" "}
          <a
            href="https://valorant-api.com/"
            className="underline text-blue-700"
          >
            Not0fficer
          </a>{" "}
          for Skin data <br /> and the Documentations of the official Riot Games
          API created by{" "}
          <a
            href="https://valapidocs.techchrism.me/"
            className="underline text-blue-700"
          >
            techchrism
          </a>
          .
          <br />
          Make sure to check them out, they did amazing work! The project
          wouldn't be possible without them.
          <a
            href="https://github.com/z4roc/valstore-mobile"
            className="flex items-center justify-center p-2 gap-2 m-2 border rounded-md bg-gray-800 text-white hover:bg-gray-700"
          >
            <Image src="/github.png" height={42} width={42} alt="GitHubIcon" />
            <p>View ValStore on GitHub</p>
          </a>
        </span>
      </section>
      <section id="authentication" className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Authentication</h1>
        <span>
          ValStore uses the official Riot Games API to authenticate users and
          fetch their shop data.
        </span>
        <h2 className="text-1xl font-bold">How do you authenticate?</h2>
        <span className="flex flex-col gap-1">
          Via the{" "}
          <a
            href="https://pub.dev/packages/webview_flutter"
            className="text-blue-700"
          >
            webview_flutter
          </a>{" "}
          package youre redirected to the official Riot Games login page. To be
          exact towards this url:
          <br />
          <code>
            static String newLoginUrl =
            "https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1&scope=account%20openid";
          </code>
          <br />
          After successful login you're redirected back to the app, the webview
          returns the access token to the app. This token is used to fetch the
          shop data.
        </span>

        <h2 className="text-1xl font-bold">Reauthentication</h2>
        <span>
          The cookies of the webview can be used to directly reauthenticate you
          on the restart of the app. This happens only if you've already logged
          in once and checked the "Keep signed in" box.
        </span>
      </section>
      <section id="data-fetching" className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Data Fetching</h1>
        <span>
          The app fetches the shop data from the official Riot Games API. Those
          are the same endpoints the game uses. The data is fetched every time
          you open the app. The data is not saved locally. To be exact the
          "GetStorefront" endpoint is used to fetch the daily shop and night
          market data.
          <br />
          <a
            href="https://valapidocs.techchrism.me/endpoint/storefront"
            className="underline font-bold text-blue-600"
          >
            Endpoint Documentation
          </a>
        </span>
      </section>
      <section id="database" className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Database</h1>
        <span>
          Over the time I built a database containing all the skins and their
          rarities and levels. This is stored in a firestore database. The
          database is used to display the skins in the app. Additionally the
          database is used to store the users wishlist.
          <h2 className="text-1xl font-bold">Data structure</h2>
          <br />
          Skins:
          <code>
            <pre>
              {`
                {
                    "skins": [
                        {
                            "name": "SkinName",
                            "offerId": "OfferId - most of the times first level",
                            "skinId": "SkinId",
                            "levels": [],
                            "chromas: [],
                            "content_tier": {
                                "color": "Color in Hex",
                                "icon": "URL",
                                "name": "TierName aka Deluxe, Premium, ..."
                            },
                            "image": "URL",
                            "cost": 1275
                        }
                    ]
                }
                `}
            </pre>
          </code>
          Wishlist:
          <code>
            <pre>
              {`
                {
                    "users": [
                        {
                            "userId": "uniqueUserId - this is publicly visible",
                            "wishlist": ["skinId1", "skinId2"]
                        }
                    ]
                }
                `}
            </pre>
          </code>
        </span>
      </section>
    </main>
  );
}
