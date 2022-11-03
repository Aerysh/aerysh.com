---
title: 'A Guide to Privacy and Circumventing Internet Blocking'
date: '2022-08-01'
excerpt: 'Maintain Privacy While Circumventing Internet Blocking. Two Birds With One Stone'
author: 'aerysh'
---

A few days ago Kominfo implemented policy [No. 5 of 2020 on Private Scope Electronic System Operator](https://jdih.kominfo.go.id/produk_hukum/view/id/759/t/peraturan+menteri+komunikasi+dan+informatika+nomor+5+tahun+2020). with the implementation of this policy, many people are affected as a result of not being able to access websites or applications that they usually use such as PayPal, Steam, Epic Games and many others. There are many who do not support the implementation of this policy, even LBH Jakarta states that this blocking is a [form of digital authoritarianism](https://bantuanhukum.or.id/lbh-jakarta-pemblokiran-situs-internet-dan-aplikasi-oleh-kominfo-merupakan-bentuk-otoritarianisme-digital/).

For me personally, I disagree with this policy because article 21 paragraph 1 which reads:

>"Private Scope PSEs are required to provide access to Electronic Systems and/or Electronic Data to Ministry or Institution in the context of supervision in accordance with laws and regulations"
-- Article 21 Paragraph 1

And not only that article, there are other articles such as Article 36 Paragraph 1 which reads:

> Private Scope PSE provides access to Traffic Data and Subscriber Information requested by Law Enforcement Officials in the event that the request is officially submitted to the Contact Person for Private Scope PSE.
-- Article 36 Paragraph 1

With the implementation of this policy, as an internet user who does not want to be restricted, I decided to create this guide with the aim of helping other internet users in Indonesia to not randomly choose a solution. 

All the things I will recommend have two purposes, namely maintaining privacy and avoiding internet blocking. All the things I provide have been tested first whether it works or not and I have read the terms of service and privacy policies of each provider and also this guide is not sponsored by anyone. So let's get started.

# Recommendations

## DNS over TLS & DNS over HTTPS

DNS is simply the internet phone book whose purpose is to translate domain names into IP addresses so that browsers or other services can access them. To avoid blocking the easiest is to use encrypted DNS either using DNS over HTTPS or DNS over TLS. 

However, this method is actually not recommended because this method has its own consequences and should only be used to get around basic DNS blocking and should not be used as permanent solution. 

### Recommended Providers
| DNS Providers                                                           | Logging  | Filtering                                                                 |
| ----------------------------------------------------------------------- |:-------- | ------------------------------------------------------------------------- |
| [AdGuard](https://adguard-dns.io/en/welcome.html)                       | Some     | Based on Server Choice. [More](https://github.com/AdguardTeam/AdGuardDNS) |
| [Cloudflare](https://developers.cloudflare.com/1.1.1.1/setup/)          | Some     | Based on Server Choice                                                    |
| [Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) | No       | Based on Server Choice. [More](https://github.com/mullvad/dns-blocklists) |
| [NextDNS](https://nextdns.io/)                                          | Optional | Based on Server Choice                                                    |
| [Quad9](https://quad9.net/)                                             | Some     | Based on Server Choice & Malware blocking by default                      |

Some service providers have their own apps, I personally recommend using native system settings instead of the app but it's up to you which one you want to use, I don't want to force you.

### How To

- Android
	- Select **Settings -> Network & Internet -> Advanced -> Private DNS**
	- Enter the DNS provided by your chosen service provider
- IOS
	- Select **Settings -> General -> VPN, DNS, & Device Management -> DNS**
	- Enter the DNS provided by your chosen service provider
- Windows
	- Go to **Control Panel -> Network and Internet -> Network and Sharing Center -> Change Adapter Settings -> Right click on Wi-Fi or Ethernet network you are connected to -> Properties -> IPv4 -> Use The Following DNS Server Address -> Enter the IP provided by your chosen service provider**
- Linux
	- If you use systemd, edit **/etc/systemd/resolved.conf** like this:
		```bash
		# Example
		[Resolve]
		DNS=9.9.9.9 # Quad9 DNS 1
		DNS=149.112.112.112 #Quad9 DNS 2
		DNS=2620:fe::fe #Quad9 IPv6 DNS 1
		DNS=2620:fe::9 #Quad9 IPv6 DNS 2
		DNSOverTLS=yes
		```
		adjust to what is provided by the service provider you choose

## VPN

> VPNs don't provide Anonymity, they just help maintain our privacy from both ISPs and Public WI-Fi and whatnot. And also for security you should only visit websites that use HTTPS

If you are asking if you should use a VPN then my answer is yes because by using a VPN at least you have kept your privacy from your ISP and the websites you visit (with the exception that if you log into a website then they will still know that it is you).

A mistake often made by VPN users in Indonesia is that they always choose a free VPN which is even more dangerous than not using a VPN at all. Always remember, if a service is free then you are most likely the product. 

When we use a VPN we are shifting our trust from the ISP to the VPN service provider. therefore we must first research the VPN service provider we want to use by not believing the ads you see, do your own research by reading the terms of service and privacy policy of the service provider, look at their track record, compare with other service providers and determine if the service provider is suitable for your needs.

When it comes to choosing a VPN service provider, my personal criteria are encryption, multiple payment options, Wireguard & OpenVPN support, external audit, no logging policy and if possible the client they provide is open source. And here are some that fit my criteria:

### Recommended Providers
| VPN Providers                       | Number of Countries                                |                                            External Audit                                            |             Open Source             | Payment Options                                                                                                                      | Client Selection                            |               Price               |
|:----------------------------------- |:-------------------------------------------------- |:----------------------------------------------------------------------------------------------------:|:-----------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------- |:---------------------------------:|
| [IVPN](https://www.ivpn.net/)       | [32 Countries](https://www.ivpn.net/status/)       |                        [Yes](https://cure53.de/pentest-report_IVPN_2022.pdf)                         |   [Yes](https://github.com/ivpn)    | Bitcoin, Monero, PayPal, Credit or Debit Card, Cash, In-App (iOS & Android)                                                          | Windows, macOS, Linux, iOS, Android         | Standard $60/year - Pro $100/year |
| [Mullvad](https://mullvad.net/en/)  | [39 Countries](https://mullvad.net/en/servers/)    |    [Yes](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf)     |  [Yes](https://github.com/mullvad)  | Cash, Bitcoin, Bitcoin Cash, Monero, Bank Wire, Credit Card, PayPal, Swish, Giropay, Eps Transfer, Bancontact, iDEAL, and Przelewy24 | Windows, macOS, Linux, iPad/iPhone, Android |             €60/year              |
| [ProtonVPN](https://protonvpn.com/) | [63 Countries](https://protonvpn.com/vpn-servers/) | [Yes](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf) | [Yes](https://github.com/ProtonVPN) | Credit or Debit Card, PayPal, Bitcoin, Cash, Bank Transfer                                                                           | Windows, macOS, Android, Linux              |      Free [^1] - $71.88/year       |

[^1]: I'm making an exception for this case because the ProtonVPN App is Open Source and you can check for yourself whether they log your activities or not.

The downside of using VPN is that some website or apps may block you when you suddenly have different IP than usual, so in the meantime you may just need to change your DNS

## Tor Browser

If the blocking we experience in the future gets worse and all the solutions I provided above became useless, maybe the only solution we can use is [Tor Browser](https://www.torproject.org/). By using Tor we will be almost anonymous on the internet and the government will hardly be able to block Tor, why is that?

ISPs or governments can only make using Tor more difficult because of [Tor Bridges](https://support.torproject.org/#censorship-7) and to actually block Tor they have to do [Deep Packet Inspection (DPI)](https://en.wikipedia.org/wiki/Deep_packet_inspection) even then the Tor Project gives us a solution through [Pluggable Transport](https://tb-manual.torproject.org/circumvention/) which is already available in the Tor browser itself and there are also other projects like [GreenTunnel](https://github.com/SadeghHayeri/GreenTunnel), [Goodbye DPI](https://github.com/ValdikSS/GoodbyeDPI) or [DPI Tunnel for Android](https://github.com/zhenyolka/DPITunnel-android).

When you use Tor browser, as much as possible do not change its settings or add extensions even recommended do not use Tor Browser in full screen mode. This is done to reduce [Fingerprinting](https://www.mozilla.org/en-US/firefox/features/block-fingerprinting/) by the websites you visit.

And if the Tor Project website is blocked, we can [send an email](https://gettor.torproject.org/) to them to request the Tor Browser installation file and request for Bridges.

Maybe this is the last way for us to use the internet freely and the only thing that can stop this way is probably the issuance of government regulations regarding the prohibition of the use of Tor. If that happens, let's write to each other and send it through the postal service.

# Other Recommendations

## Password Manager

You have no idea how much it helped me when I first used a password manager you should try it. there are many password managers you can use but here are some of my recommendations

| Name                                    |                    Open Source                     | Local Storage | Cloud Storage | Platform                            |
| --------------------------------------- |:--------------------------------------------------:|:-------------:|:-------------:| ----------------------------------- |
| [Bitwarden](https://bitwarden.com/)     |        [Yes](https://github.com/bitwarden)         |    Yes[^2]    |      Yes      | Windows, macOS, Linux, iOS, Android |
| [KeePassDX](https://www.keepassdx.com/) |   [Yes](https://github.com/Kunzisoft/KeePassDX)    |      Yes      |      No       | Android                             |
| [KeePassXC](https://keepassxc.org/)     | [Yes](https://github.com/keepassxreboot/keepassxc) |      Yes      |      No       | Linux, macOS, Windows               |

[^2]:You can self host your own Bitwarden synchronization server for example by using [Vaultwarden](https://github.com/dani-garcia/vaultwarden).

## Authenticator

Another thing I've found very helpful is adding 2-factor authentication to the accounts I have. there are a few apps I can recommend

| Name                                           |                     Open Source                     | Platform |
| ---------------------------------------------- |:---------------------------------------------------:| -------- |
| [Aegis Authenticator](https://getaegis.app/)   |   [Yes](https://github.com/beemdevelopment/Aegis)   | Android  |
| [Raivo OTP ](https://raivo-otp.com/)           | [Yes](https://github.com/raivo-otp/ios-application) | iOS      |
| [andOTP](https://github.com/andOTP/andOTP)[^3] |       [Yes](https://github.com/andOTP/andOTP)       | Android  |

[^3]:It's been neglected for quite some time but it's still usable, if you want to continue this project please contact the creator.

# Conclusion
After writing this guide, I feel we should remain hopeful that the future of the internet in Indonesia is better than it is today. this guide is of course not perfect and you can help this guide by adding more recommendations and advice or just correcting writing errors or maybe translating into other languages through [This Repository](https://gitlab.com/aerysh/aerysh).