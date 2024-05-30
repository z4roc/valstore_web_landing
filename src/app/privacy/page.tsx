import Navbar from "@/components/navbar";

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 xl:p-10 p-2 bg-gradient-to-r from-background via-primary to-background">
      <div className="h-full w-full flex flex-col flex-1 xl:flex-row justify-center m-10 items-center text-center">
        <div className="flex flex-col flex-1 items-center justify-center">
          <span className="text-lg text-left">
            <h1 className="font-bold">Privacy Policy</h1> This app is provided
            as a free for use Service to everyone. This is not an officially
            supported product of Riot Games, although official Client APIs are
            used to gather all the information needed. I'm not associated with
            Riot Games in any ways. Valorant and shown Ingame Content belong to
            Riot Games, Inc. By downloading and using my App you agree with
            following conditions.
            <h1 className="font-bold">Cookies</h1> The login of the App might
            use Cookies to reauthenticate you on the restart of the app.{" "}
            <h1 className="font-bold"> Crash Reports and Data</h1>
            Google play sends crash reports if you have issues using the app,
            beyond that this App does not collect any data of you besides your
            PlayerID for the wishlist. Any login data you type in is not
            provided towards the app itself, after authentication the app
            receives an access token to get your store front and night market.
            <h1 className="font-bold"> Security</h1> Nobody wants to lose his
            Valorant account with all his skins on, my intention behind building
            this app was my mistrust in other apps requiring you to directly
            provide login information in order to work. So as my colleagues from
            other Apps I came up with a way to get an access token without
            needing the login credentials themselfs. The login form you see is
            the official Riot Games signin page, on successful login the app
            receives the access token to be able to call the Riot games server
            for your shop information. Riot Games officially stated that the use
            of unofficial third party apps is bannable. It's not sure yet wether
            Riot Games bans you for this, as of today there have been no bans,
            but you have to use the app at your own risk. I assume no liability
            for any bans and losses to accounts.{" "}
            <h1 className="font-bold">External pages </h1>On f.e. the About page
            you can click on links to open other sites, review the Terms of
            Service and Privacy Policy on those websites. I'm not responsible
            for the contents and policies on external sites.{" "}
            <h1 className="font-bold"> Contact</h1>
            Feel free to contact me at Discord "turbointerl9" or via{" "}
            <a href="mailto:arthur@aktamirov.de" className="underline">
              Mail
            </a>{" "}
            for any additions required to this policy, so in the future these
            policies might change{" "}
            <h1 className="font-bold m-4">ZAROC, 30th May 2024</h1>
          </span>
        </div>
      </div>
    </main>
  );
}
