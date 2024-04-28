import 'core-js/actual'
import { listen } from '@ledgerhq/logs'
import { AppClient, DefaultWalletPolicy, WalletPolicy } from 'ledger-bitcoin'

// https://www.npmjs.com/package/ledger-bitcoin
// 

// Keep this import if you want to use a Ledger Nano S/X/S Plus with the USB protocol and delete the @ledgerhq/hw-transport-webhid import
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
// Keep this import if you want to use a Ledger Nano S/X/S Plus with the HID protocol and delete the @ledgerhq/hw-transport-webusb import
// import TransportWebHID from '@ledgerhq/hw-transport-webhid'

//Display the header in the div which has the ID "main"
const initial = '<h1>Click anywhere to connect to Ledger...</h1>'
const $main = document.getElementById('main')
if (!$main) throw new Error('no main')

$main.innerHTML = initial

document.body.addEventListener('click', async () => {
  $main.innerHTML = initial
  try {
    // Keep if you chose the USB protocol
    const transport = await TransportWebUSB.create();

    // Keep if you chose the HID protocol
    // const transport = await TransportWebHID.create()

    // Listen to the events which are sent by the Ledger packages in order to debug the app
    listen((log) => console.log(log))

    const app = new AppClient(transport)

    // Get the master key fingerprint
    const fpr = await app.getMasterFingerprint()
    console.log('Master key fingerprint:', fpr.toString('hex'))

    // Get App and Version
    const version = await app.getAppAndVersion()
    console.log('App and version:', version)

    // const ourPubkey = await app.getExtendedPubkey("m/48'/1'/0'/2'");
    // console.log('Our extended public key:', ourPubkey)
    // ERROR Ledger device: UNKNOWN_ERROR (0x6a82)

    // NOT working
    // const miniscriptPolicy = new WalletPolicy('Miniscript', "wsh(or_d(pk([558f6baa/48'/0'/0'/2']xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd/<0;1>/*),and_v(v:pkh([d65e423f/48'/0'/0'/2']xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu/<0;1>/*),older(65535))))#7r9me7ca", [])

    // NOT working
    // const miniscriptPolicy = new WalletPolicy('Miniscript', "and_v(or_c(pk(B),or_c(pk(C),v:older(1000))),pk(A))", [
    //   "xpub67yMUMbr2gAnBgnYvXcbJq8iUBe54Ev2dbUYKGN8jGY21AHJFeR7mnZqhbUNze4UbpRE9S1fWvmFCsFN4EvU1rWdqegW7dzoa7vZmYCLAAy",
    //   "xpub6BosfCnifzxcFwrSzQiqu2DBVTshkCXacvNsWGYJVVhhawA7d4R5WSWGFNbi8Aw6ZRc1brxMyWMzG3DSSSSoekkudhUd9yLb6qx39T9nMdj",
    //   "xpub6C6nQwHaWbSrzs5tZ1q7m5R9cPK9eYpNMFesiXsYrgc1P8bvLLAet9JfHjYXKjToD8cBRswJXXbbFpXgwsswVPAZzKMa1jUp2kVkGVUaJa7"
    // ])

    // WORKGIN
    // const miniscriptPolicy = new WalletPolicy('Miniscript', "pkh(@0/**)", [
    //   "xpub67yMUMbr2gAnBgnYvXcbJq8iUBe54Ev2dbUYKGN8jGY21AHJFeR7mnZqhbUNze4UbpRE9S1fWvmFCsFN4EvU1rWdqegW7dzoa7vZmYCLAAy",
    // ])

    // WORKING
    // const miniscriptPolicy = new WalletPolicy('Miniscript', "wsh(or_d(pk(@0/<0;1>/*),and_v(v:pkh(@1/<0;1>/*),older(65535))))", [
    //   "xpub67yMUMbr2gAnBgnYvXcbJq8iUBe54Ev2dbUYKGN8jGY21AHJFeR7mnZqhbUNze4UbpRE9S1fWvmFCsFN4EvU1rWdqegW7dzoa7vZmYCLAAy",
    //   "xpub6BosfCnifzxcFwrSzQiqu2DBVTshkCXacvNsWGYJVVhhawA7d4R5WSWGFNbi8Aw6ZRc1brxMyWMzG3DSSSSoekkudhUd9yLb6qx39T9nMdj"
    // ])

    // WORKING
    // const miniscriptPolicy = new WalletPolicy('Miniscript', "wsh(or_d(or_d(pk(@0/<0;1>/*),pk(@1/<0;1>/*)),and_v(v:pkh(@2/<0;1>/*),older(65535))))", [
    //   "xpub67yMUMbr2gAnBgnYvXcbJq8iUBe54Ev2dbUYKGN8jGY21AHJFeR7mnZqhbUNze4UbpRE9S1fWvmFCsFN4EvU1rWdqegW7dzoa7vZmYCLAAy",
    //   "xpub6BosfCnifzxcFwrSzQiqu2DBVTshkCXacvNsWGYJVVhhawA7d4R5WSWGFNbi8Aw6ZRc1brxMyWMzG3DSSSSoekkudhUd9yLb6qx39T9nMdj",
    //   "xpub6C6nQwHaWbSrzs5tZ1q7m5R9cPK9eYpNMFesiXsYrgc1P8bvLLAet9JfHjYXKjToD8cBRswJXXbbFpXgwsswVPAZzKMa1jUp2kVkGVUaJa7"
    // ])


    // NOT working
    // const script = `
    // wsh(
    //   or_d(
    //     or_d(
    //       pk(@0/<0;1>/*),
    //       or_d(
    //         pk(@1/<0;1>/*),
    //         pk(@2/<0;1>/*)
    //       )
    //     ),
    //     sha256(@3/<0;1>/*)
    //   )
    // )`
    // const miniscriptPolicy = new WalletPolicy('Miniscript', scriptWithoutWhitespaces, [
    //   "xpub67yMUMbr2gAnBgnYvXcbJq8iUBe54Ev2dbUYKGN8jGY21AHJFeR7mnZqhbUNze4UbpRE9S1fWvmFCsFN4EvU1rWdqegW7dzoa7vZmYCLAAy",
    //   "xpub6BosfCnifzxcFwrSzQiqu2DBVTshkCXacvNsWGYJVVhhawA7d4R5WSWGFNbi8Aw6ZRc1brxMyWMzG3DSSSSoekkudhUd9yLb6qx39T9nMdj",
    //   "xpub6C6nQwHaWbSrzs5tZ1q7m5R9cPK9eYpNMFesiXsYrgc1P8bvLLAet9JfHjYXKjToD8cBRswJXXbbFpXgwsswVPAZzKMa1jUp2kVkGVUaJa7",
    //   "xpub6CatWdiZiodmUeTDp8LT5or8nmbKNcuyvz7WyksVFkKB4RHwCD3XyuvPEbvqAQY3rAPshWcMLoP2fMFMKHPJ4ZeZXYVUhLv1VMrjPC7PW6V"
    // ])

    // WORKING
    //     const script = `
    // wsh(
    //   or_d(
    //     or_d(
    //       pk(@0/<0;1>/*),
    //       pk(@1/<0;1>/*)
    //     ),
    //     and_v(
    //       v:pkh(@2/<0;1>/*),
    //       older(65535)
    //     )
    //   )
    // )`
    const script = `
    wsh(
      or_d(
        or_d(
          pk(@0/<0;1>/*),
          or_d(
            pk(@1/<0;1>/*),
            pk(@2/<0;1>/*)
          )
        ),
        and_v(
          v:pkh(@3/<0;1>/*),
          older(65535)
        )
      )
    )`

    const scriptWithoutWhitespaces = script.replace(/\s+/g, '');
    console.log(scriptWithoutWhitespaces)

    const miniscriptPolicy = new WalletPolicy('Miniscript', scriptWithoutWhitespaces, [
      "xpub67yMUMbr2gAnBgnYvXcbJq8iUBe54Ev2dbUYKGN8jGY21AHJFeR7mnZqhbUNze4UbpRE9S1fWvmFCsFN4EvU1rWdqegW7dzoa7vZmYCLAAy",
      "xpub6BosfCnifzxcFwrSzQiqu2DBVTshkCXacvNsWGYJVVhhawA7d4R5WSWGFNbi8Aw6ZRc1brxMyWMzG3DSSSSoekkudhUd9yLb6qx39T9nMdj",
      "xpub6C6nQwHaWbSrzs5tZ1q7m5R9cPK9eYpNMFesiXsYrgc1P8bvLLAet9JfHjYXKjToD8cBRswJXXbbFpXgwsswVPAZzKMa1jUp2kVkGVUaJa7",
      "xpub6CatWdiZiodmUeTDp8LT5or8nmbKNcuyvz7WyksVFkKB4RHwCD3XyuvPEbvqAQY3rAPshWcMLoP2fMFMKHPJ4ZeZXYVUhLv1VMrjPC7PW6V"
    ])

    const [policyId, policyHmac] = await app.registerWallet(miniscriptPolicy)

    console.log(policyId, policyHmac)

    // const ourKeyInfo = `[${fpr}/48'/1'/0'/2']${ourPubkey}`;
    // const otherKeyInfo = "[76223a6e/48'/1'/0'/2']tpubDE7NQymr4AFtewpAsWtnreyq9ghkzQBXpCZjWLFVRAvnbf7vya2eMTvT2fPapNqL8SuVvLQdbUbMfWLVDCZKnsEBqp6UK93QEzL8Ck23AwF";

    // const multisigPolicy = new WalletPolicy(
    //   "Cold storage",
    //   "wsh(sortedmulti(2,@0/**,@1/**))", // a 2-of-2 multisig policy template
    //   [
    //     otherKeyInfo, // some other bitcoiner
    //     ourKeyInfo,   // that's us
    //   ]
    // )

    // Display your bitcoin address on the screen
    // const h2 = document.createElement('h2')
    // h2.textContent = bitcoinAddress
    // $main.innerHTML = '<h1>Your first Bitcoin address:</h1>'
    // $main.appendChild(h2)
  } catch (e) {
    //Catch any error thrown and displays it on the screen
    console.error(e)
    const $err = document.createElement('code')
    $err.style.color = '#f66'
    $err.textContent = String(e.message || e)
    $main.appendChild($err)
  }
})
