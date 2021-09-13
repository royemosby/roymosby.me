---
title: "Hosting and Domain Management"
date: 2021-09-12
extract: "There has to be a mechanism that makes the connection between a URL and the server hosting a site. This is where Domain Name Services play the part of match-maker."
description: "Using domain name records to map domains to host services"
social_preview: "/images/og/dns.jpg"
tags: ["hosting", "provider", "dns", "internet", "networking"]
---

<figure>
  <img src="/images/og/dns.jpg" alt="article hero image of DNs in block letters">
  <figcaption>Image by <a href="https://www.flickr.com/photos/91261194@N06/51081101978">Jernej Furman</a></figcaption>
</figure>

## Hosting

The final step in any web project is getting it hosted. A host is used to store the files then serve the content to a user's browser when requested. This host has a specific set of IP addresses designated to access the site. An IP address consists of a series of numbers (eg: 192.168.1.1 for IPv4 or 2001:0db8:85a3:0000:0000:8a2e:0370:7334 for IPv6) so is not very readable. To confuse matters a bit more, direct IP access is frequently blocked since a single address may be shared between small sites. In the case of large sites, multiple IP addresses may be used to service that single site!

## Uniform Resource Locator

A URL (Uniform Resource Locator) is used to simplify matters. This is readable, formatted text used to represent a specific site on the internet. This is your https://google.com or https://www.linkedin.com/feed/ that you see in the address bar of your browser. It's also the links on web pages that you use to navigate around the internet.

Taking LinkedIn as an example,  URL can be broken down into 4 parts.

1. the protocol: `https://` which determines how the browser connects to the server
2. the domain name: `linkedin.com`  which represents the site as a whole
3. the subdomain: `www` which is can be optionally used to segment a site into parts
4. and finally the path: `feed` which is used by the server to generate or serve up specific pages. The path is also optional since the server can respond to a URL consisting of only the protocol and domain.

## Domain Name Services

There has to be a mechanism that makes the connection between a URL and the server hosting a site. This is where Domain Name Services play the part of match-maker. When a user enters the URL into the address bar, the browser sends the name off their ISP's Domain Name Servers (DNS). They connect to a larger name server network that acts as a decentralized database of URLs and IPs. The services resolve the URL to an IP address that the browser uses it to visit the site. As of February 2021, there are 1.86 billion websites on the internet so there is a lot more going on to match a URL to website than the overview I provided. See the [Wikipedia article, Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) for a comprehensive explanation.

## Consolidated host and domain provider

When working on a site where the files are hosted on the same company that manages the URL, name services are a pretty straight-forward matter. The provider will often set up the records that configure this behavior for you. However, it is possible to run into a scenario where the files are hosted on a different service than where the domain is maintained.

## Separate host and domain provider

This happened to me just last week. My client bought their domain name from [domain.com](https://www.domain.com/) and their hosting services from [HostGator](https://www.hostgator.com/). I am able to use DNS records to make the connection between the two services. It is important to note that I did not change the DNS on the domain provider. Those addresses remained untouched; I only made changes to the A and CNAME records.

There are differing kinds of records and services that can be mapped. For a website, however the focus is on A (or AAAA) and CNAME records on the domain provider. An A record is used to map the domain to an IPv4 address of the server that holds the content to a domain. AAAA is used for IPv6 IP adresses. CNAME, short for canonical name, can map an alias name to the canonical, or true name of the site. This is often done with sub-domains, like
"www.example.com" to "example.com"

The A (and AAAA) formats differ slightly between providers. At the root though, they contain 4 pieces of information.

1. The record type (A)
2. The record's name- more info below...
3. TTL- (time to live, in seconds)- more info below...
4. Address

The formatting for the name periodically include some shorthand. "@" is used to represent the root domain instead of typing it out. "www" is used to represent the common www prefix. When setting the TTL, 3600 (1 hour ) is a safe baseline. Larger sites need may more consideration if they experience frequent changes. [Varonis' blog](https://www.varonis.com/blog/dns-ttl/) discusses DNS record TTL in detail.

## Definitions

**Domain name system** is a distributed system for translating URLs into IP addresses.

**Name servers** a.k.a. "local DNS server" provide services to handle queries regarding the location of a domain name's services. Their services direct queries to the DNS of the domain host. This bridges resources and the domain name- both of which may be managed by different entities.

**DNS records** are rules that tell nameservers how to handle traffic to domains and subdomains. There are several different record types:

* **A**: Address record, which is used to map host names to their IPv4 address.
* **AAAA**: IPv6 Address record, which is used to map host names to their IPv6 address.
* **ALIAS**: A pseudo-record that works like a CNAME but can be safely used at the Zone Apex because it always resolves to A (or AAAA) record(s).
* **CAA**: Certificate Authority (CA) Authorization, which is used to specify which CAs are allowed to create certificates for a domain.
* **CNAME**: Canonical name record, which is used to specify alias names.
* **MX**: Mail exchange record, which is used in routing requests to mail servers.
* **NS**: Name server record, which delegates a DNS zone to an authoritative server.
* **SPF**: Sender Policy Framework record, a deprecated record type formerly used in e-mail validation systems (use a TXT record instead).
* **SRV**: Service locator record, which is used by some voice over IP, instant messaging protocols, and other applications.
* **TXT**: Text record, which can contain arbitrary text and can also be used to define machine-readable data, such as security or abuse prevention information.
