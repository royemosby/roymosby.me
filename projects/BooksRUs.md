---
layout: project
title: Books-R-Us
project: artifact
published: true
updated: 31 May, 2017
---

## IT489-02
## Introduction

Book-R-Us is a private business that sells books at two locations in the Northeast. They plan to expand operations to 10 different facilities across New England in the next 5 years. With the expansion of operations, they have identified that their current sales and inventory management system- SIMS- will not scale. In addition, they wish to increase the system’s capabilities to include e-commerce, online book ordering for pick-up, and inter-store supply-chain communication. This move will address operational concerns and management feels that it will put it on competitive grounds with online competitors such as Amazon.com.

Below includes a list of functional and non-functional requirements. Functional requirements include all of the basic processes or tasks that a system is required to provide (Dennis, Wixon, and Tegarden, 2005) independent of the software or hardware used. Non-functional requirements describe how the system will act (Eriksson, 2012) which also includes performance characteristics.

### Functional requirements
- inventory tracking
- point of sale sales processing
- online purchase for customers
- online book ordering for pick-up

### Nonfunctional requirements
- centralized inventory accessibility
- single system for all requirements
- e-commerce front end for website
- secured from inside and outside threats
- secure transactions for e-commerce
- provide staff with online access to inventory information

## Distributed system type and recommendation

The requested system will follow a client-server approach. A high-level snapshot of the system contains objects whose roles differ from each other. At minimum, the sales and inventory system will consist of a database management system (DBMS), a web server, clients for clerks, and client access for customers.

According to Coulouris et al (2012) clients in a peer to peer network all perform similar roles without identifying with client or server processes. This lack of distinction makes peer-to-peer inappropriate for this distributed system. The roles identified in the minimally described system match a more common client-server system.

Both the DBMS and the web server provide services while the clerk clients and customer systems query and consume those services. One can also identify a client-server relationship between the web server and the DBMS. The web server receives customer requests then in turn queries the DBMS for the requested data.

## Distributed system challenges

Challenges exist on multiple fronts for the proposed Books R Us’ SIMS. Internal and external networks, client and server operating systems, and the software used all add to the heterogeneity of a successfully implemented system. Since the book sales are the fundamental service provided by the company, their inventory has to remain accurate. The system must be able to query and update information from a variety of sources while maintaining data integrity. To further protect the inventory, the system must also be able to handle process and communication failures. Finally, for the system to provide utility, much of its complexity has to be concealed from those transacting on the system. This is a foundational list of challenges and will be elaborated on as the project advances.

## Architectural model- tiers

The separation of the database from the web server indicates that the SIMS will be a three-tiered architecture. The functionalities in a system can be separated into different tiers (Coulouris et al, 2012). The customer systems and the clerk clients can both be grouped into tier one. The web server, acting as an intermediary between the consumer and the database, resides at tier two. Finally, the database resides at tier three.

Though it could be approached at a two-tier, client-server system, providing an intermediary tier offloads some of the effort from the DBMS. Common queries can be cached on the web server and served up from there instead of forwarding the query all the way to the DBMS. The separation also allows for more robust error handling. Instead of the DBMS having to deal with how to deal with query errors, the burden can lay with the web server.

## Architectural model- requirements
 Several different use cases will illustrate the network and security needs. They will include four basic users- customer, manager, POS clerk, and inventory specialist.

&&&& Use Case

## Network setup

SIMS will be connected over a LAN at each location, inter-networked through the internet. A platform as a service, PaaS, provider will be used to host centralized inventory databases and web front ends. While multi-protocol label switching, MLPS provides businesses with a reliable means to establish high-speed, WANs(Dix, 2011), best-effort internet connectivity service is of high enough quality that Books R Us will be able to conduct business and incorporate future expansion.

Each LAN will provide the location with connectivity and speed to support daily operations. Its capacity will support checkout staff, inventory and stocking staff, as well as management. Each location will also host a branch inventory management database, BIM-DB, and inventory management, IM, front-end. Customer access, to include in-store terminals, will not use the LAN. Instead, they will interface with Books R Us’ solutions hosted on the PaaS through the internet.

The LAN will be a three tier design to separate out access, distribution and core network services (Cisco, n.d.). Wired connectivity will be provided to point of sale systems, POS’s, and wireless will provide connectivity to handheld inventory scanners. Management will be provided the option to use wired and/or wireless connectivity to support their management styles. For speed and reliability, all local servers will connect to the LAN over multi-mode fiber.

&&&& BranchNetwork

## Network security

Several different techniques will be used to protect the LANs at each location. The first and most important will be the application of physical security. Vital resources for the distributed system, the networking equipment and servers, will be placed in a secured networking closet inaccessible to Books R Us’ customers or employees. All equipment and users will have to authenticate to gain network access. This could be done through the use of a RADIUS server and Active Directory. Wireless connectivity will secured through the use of WPA2 enterprise which takes advantage of RADIUS authentication (TestOut, 2016)

The distributed system will also use cryptographic communications whenever possible between nodes. This will minimize information leakage and transmission manipulations. Each node will use privately shared keys to encrypt traffic. The use of private keys decreases the computational needs for cryptography over public keys by 100 to 1000 times (Coulouris et al, 2012).

Transaction management will also be used to protect the distributed system. POS’, scanners, and managers will not be able to commit any changes directly to the BIM-DB. Write, update, delete, and other modification to the BIM-DB will be handled by the IM front-end. The BIM-DB server will be the only system from the branch to interface with the centralized IM databases. Limiting database transactions to the IM front ends allows additional validation mechanisms to be emplaced, ensuring that transactions are valid and coming from valid sources.

## OOD environment

Java Enterprise Edition will be used to for the development of Book R Us’ SIMS. Although Java accounts for 2.9% of server side programming (W3 Techs, updated daily) at current writing, Books R Us uses primarily does not wish to transition into a Windows-based environment. Their current development team and tech support are comfortable with Java applications and have worked with a custom employee time card system written in that language.

Location-dependent nodes, in particular, the POS registers will have client applications built using Java ME to provide a privileged means to interact with the IMS. As defined in the use cases, they differ from customer capabilities because they require the ability to manipulate local stock information and request stock from remote stores. Because of computing constraints and a differing user interface on the scanners, they will need custom clients as well. These will also be developed using Java ME.

In order to run the IMS, Java EE needs to be installed on the PaaS that Books R Us will rent. Java EE also needs to be installed on each location’s local inventory management front-end (IMFE) server and local database manager.

&&&& BranchNetwork

Eclipse will be used for the development environment. The IDE is free, extensible and has a thriving user community. When and if needed, Eclipse can be adapted to working with other languages and scripts such as PHP and JavaScript. It also provides a cloud-based development environment so that developers are not tied down to a specific location.

## The cloud

Books R Us’ recommendation includes the use of cloud services to host the SIMS centralized database and services. However, the SIMS is not designed to be an enterprise content management system-ECM. SIMS will provide a means to store, display, and manipulate inventory information to provide all locations with accurate information.

ECM as defined by Association for Information and Image Management-AIIM- is “the strategies, methods and tools used to capture, manage, store, preserve, and deliver content and documents related to organizational processes.” Additional requirements changes the scope of the project and would burden the design process.

## Resources

Cisco Networking Academy. (Apr, 2014). *Cisco Networking Academy’s introduction to switched networks*. Retrieved from http://www.ciscopress.com/articles/article.asp?p=2181835&seqNum=4

Coulouris, G., Dillmore, J., Kindberg, T., and Blair, G. (2012). *Distributed systems concepts and designs* (5th ed.). Boston: Pearson Education, Inc.

Dennis, A., Wixon, B., and Tegarden, D. (2005). *System analysis anddesign with UML version 2.0* [2nd ed.]. Hoboken, NJ: John Wiley and Sons, Inc.

Dix, J. (Sep, 2011). *Enterprise WAN connectivity: MPLS VPN vs. public internet*. Retrieved from [http://www.networkworld.com/article/2220617/tech-debates/enterprise-wan-connectivity--mpls-vpn-vs--public-internet.html ](http://www.networkworld.com/article/2220617/tech-debates/enterprise-wan-connectivity--mpls-vpn-vs--public-internet.html "http://www.networkworld.com/article/2220617/tech-debates/enterprise-wan-connectivity--mpls-vpn-vs--public-internet.html")

Eriksson, U. (Apr, 2012). *Functional vs non functional requirements*.
Retrieved from [http://reqtest.com/requirements-blog/functional-vs-non-functional-requirements/ ](http://reqtest.com/requirements-blog/functional-vs-non-functional-requirements/)

Oracle. (2012) *Your first cup*. Retrieved from [http://docs.oracle.com/javaee/6/firstcup/doc/gkhoy.html ](http://docs.oracle.com/javaee/6/firstcup/doc/gkhoy.html)

TestOut. (2016). *10.6.2 wireless security facts* [PDF document]. Retrieved from [https://cdn.testout.com ](https://cdn.testout.com)

Tremblett, P. (2001). *Instant enterprise Java Beans*. McGraw-Hill: United States.
