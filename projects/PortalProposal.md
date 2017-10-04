---
layout: project
title: Portal Proposal
project: artifact
published: true
updated: 31 May, 2017
---

<div class="large reveal reflection" id="portalProposal" data-reveal>
<h1>Portal proposal</h1>
<h3>Intranet portal migration from SharePoint 2010 to 2013</h3>
<p>This project is unique from the others in my portfolio because it is a real-world application of skills developed up to that point. I had the luck that this project executed roughly on the same timeline as IT415 and IT420, from October 2016 to February 2017. My IT capstone classes focused on the SDLC- IT415 addressing inception and elaboration phases while IT420 focused on the construction and transition phases.</p>

<p>This artifact illustrates my communication skills as it involved reaching out to stakeholders to share timelines and requirements. In turn, I collected their feedback in the form of their needs, constraints, and limitations then integrated these elements into a course of comprehensive action presented to leadership for approval.</p>

<p>While the capstone focused on learned skills and not developing new, I gained new insights to the complexities of IT project development. In particular, communication in an distributed, ever-moving environment is a challenge. The hardest part of this project was being able to reliably communicate with all the subordinate units who had differing training schedules. At times, certain units would not receive a request for information or choose not to act in a timely manner on it. They would then be out of sync with the the progress made up to that point.</p>

<p>When the project focus had moved elsewhere, those behind would try to get the shareholders to circle back to an issue that was already addressed and closed for consideration. At points like this, the workgroup emphasized the importance of moving the timeline forward and only stoped with a significant exception arose. Only one such exception came up- that of catching up a unit that had recently came off of deployment after the project started.</p>

<p>Looking back on this project, I would have engaged official communications channels more to get more involvement from the subordinate units. As it stood, only one operational order (OPORD) was delivered addressing the timeline and the requirements of the subordinate units. In hindsight, this OPORD needed to be followed up by continuous fragmentary orders (FRAGORD) outlining more specific details and provide changes to the timeline as needed. The FRAGORDs, because of their nature, would have put the units under additional scrutiny of the Division staff, compelling them to give the project the attention it needed.</p>

    <button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span>
    </button>
</div>

## Problem Statement

The 3rd Infantry Division’s (3ID) unclassified SharePoint (SP) 2010 portal will be upgraded to SP 2013. The portal services the division staff, two brigade combat teams, an aviation brigade, division artillery, a support brigade, and several co-located units. It consists of over 40 site collections each of which contain nested sub-sites organized to reflect the division’s organization chart. The portal’s primary use is as an ECM, providing storage and workspace for various operational and administrative documents. Calendars and custom lists are implemented across the portal based on the needs and skill levels of the units using them. SP workflows have also been adopted to support certain business processes, particularly as help-desk systems and HR functions.

The Network Enterprise Center (NEC) maintains the WAN and infrastructure to include all network services. They do not perform any sort of development work. That is left up to their customers as their focus is primarily on service reliability and security compliance. A tight timeline must be established because of constrains placed upon the NEC. They have several intensive projects that start mid-December so must redirect staff and resources elsewhere. To prevent resource conflict, the migration phases that require NEC support for SP 2013 must be completed by December second.

**Need \#1:** Complete migration of all critical information from SP 2010 to SP 2013 within timeline.

**Need \#2:** Establish a consistent baseline of features across all site collections for a stable platform for future portal 	development.

**Need \#3:** Ensure that users can collaborate on information products both migrated and future.

**Need \#4:** Emplace a governance policy that will address content 	management and information security needs

## Significance

The original SP 2010 portal was developed with the aim of high granularity for moving content. The portal’s architecture included 40+ site collections. The thought was that is easier to export and import a whole site collection from a SP server than it is to extract and move content. This sort of migration has never been performed so granularity has not provided the unit with any benefit. However, maintaining 40+ site collections imposed a huge administrative burden. Work performed on one site collection, such as adding functionality or adding new content types, must be redone on every subsequent site collection. Through the years, uneven development effort has left all the site collections with differing solutions and capabilities that may or may not be found on other site collections.

3ID will be using the migration to reduce the number of site collections, provide the division with a uniform feature set upon which to build future functionality, and re-invigorate a sustainable content management policy. This will ensure that the portal is more usable that the previous portal as well as provide a platform for future ECM improvements.

**Benefit \#1:** Continued compliance within Army information 	assurance policy. Current information assurance objectives include the replacement of all MS Server 2008 instances with Server 2013. Also, all SharePoint 2010 or below that is not centrally managed by 	NETCOM need to be upgraded to 2013.

**Benefit \#2:** Continued user access to a platform that allows for 	collaboration and centralized information dissemination. Both content migration and reworking the permissions will insure that users have access to the appropriate material on the portal.

**Benefit \#3:** Decreased administrative burden on content managers 	(CM). Less time will be spent re-implementing solutions across the different site collections.

**Benefit \#4:** Re-established permissions schema will allow for 	appropriate access to content with less troubleshooting on the part of CMs.

## Goals and Objectives

### Current Conditions

The installation of SP13 exists beyond the scope of this project as it was installed and is maintained by the NEC. As a lead-up to the project, coordination with the NEC’s server division ensured the establishment of an environment appropriate for a division and its subordinate units was created in the SP farm.

Security is already in place and is not a consideration that has to be fully addressed in this project. As a manner of policy, PKI is used for all network authentication activities. The user has a private key located on a Common Access Card (CAC) that is used for authentication. All services on the network are authenticated into separately and does not use computer logon credentials. Anonymous access to SP is not authorized.

### Limitations

The migration team does not have full access to the SP farm. Because of security concerns, certain limitations have been identified. Work cannot be performed directly on the server with PowerShell. The NEC will not permit the use of Visual Studio to develop custom deployable packages. All development efforts must rely on the web GUIs provided for administrative functions. Visual Studio may be used to develop HTML and CSS for the master pages.

## Goals

The stakeholder workgroup has outlined several goals to be reached to consider the project a success. Each goal has a few specific objectives to be achieved to meet the goal.

**\#1) Provide a consistent set of features across all the site collections and sites.**

&&&& Table

**\#2) Decrease the burden of site collection administration through consolidation.**
*metric: site collection number decreased by at least 75%.*

The migration team will examine the current portal structure to consolidate as many site collections as possible. Considerations will include the topological organization of the command, the amount of data generated inside each section, and the amount of traffic each section receives.

&&&& Table

**\#3) Provide a consistent user experience across all sites though uniform layouts.**
*metric: 15% increased portal traffic*

Consistent user experience will be provided using pre-populated publishing site and team site templates. They will provide a similar set of apps so that each site is intuitively used in a similar manner across the entire portal.

&&&&Table

 **\#4) Provide a brand standardization for current and future sites.**

Closely tied to the site templates, master pages will provide styling that provides a professional look and feel.

&&&&Table

**\#5) Users should have an easy time finding reliable content.**

*metrics: 0 failed searches relating to terms found in the organization’s ontology. 50% less user self-reported search frustration over a 6-month period*

Portal governance will be established by the migration team and then enforced by section representatives responsible for a portion of the portal. Where possible, governance mechanisms will be embedded into the functions of the portal so that compliance is in line with usage. This can be done through field validation, content retention policies, and workflows.

Efforts will be put into a thorough content inventory to include documents, lists and calendar entries, and workflows. As items are identified, they will go through a screening process to ensure that only information of value makes it through the migration. All suitable content will be backed up on local admin computers, then ported over to the new SP as sites become available.

&&&&Table

## Deliverables

*The following is a complete list of all project deliverables.*
1. Portal scaled to support unclassified daily operations of an Army Division and its subordinate units
2. Site hierarchy reflecting current unit structure with a company level fidelity
3. Two site templates: One publishing template for unit landing pages. One team site template to for section collaboration workspaces
4. Two master pages each corresponding to a site type
5. Governance document covering portal usage and content management policies.
6. Training for administrators and key users to support portal usage and governance

## Methodology

The project will use several different methodologies as appropriate for each one of the goals. The overall project will employ a macro process (Booch et al, 2007) since it allows for general phases to be identified and roughly ordered. Different stages of the project are easy to delineate so can be seen as different phases. Goals one and two line up with the overall project so will follow the same waterfall method. Goals three and four require development work more appropriate to Agile as they will need frequent stakeholder feedback and need be flexible to adapt to ongoing discovery about ECM usage. Goal 5 will require a prototyping model to deal with the wide variety of unknown content that may go through the system.

-   **Phase \#1 Requirements** – Establish scope and bounds of a 	project. Allows the PM and stakeholders to define the problems to be 	addressed by the system.
-   **Phase \#2 Analysis and design-** Translates the requirements into 	system specifications. Development work performed on system.
-   **Phase \#3 Implementation**- Actual system emplaced
-   **Phase \#4 Test**- 	Analysis of implementation to determine its suitability in addressing the projects requirements. Correction of any system flaws identified
-   **Phase \#5 Deployment**- Implementation of system that satisfies 	identified by project stakeholders.

## Risks

&&&&ProjRisksTable

The breadth and scope of the project prevents the PM and the primary stakeholders from being able to control all aspects of implementation of the project. It is expected that some CMs will receive incorrect information or will not be able to follow a provided plan to its fullest. However, all risks will be mitigated to minimize this type of impact.

## Project Summary

Provided a tight timeline, the 3ID portal will be migrated from SP 2010 to 2013. This project aims to improve the use of this portal by decreasing its maintenance footprint and establishing a sustainable content management strategy. All information critical to operations will be moved without loss from one portal to another. Personnel will be provided appropriate access to work collaboratively on the ECM.

## Glossary

**Enterprise content management system-** (ECM)- Content management system whose primary use is to maintain information valuable to an organization’s operation.

**Farm-** The set of servers on which the SP resides.

**Network Enterprise Center-** (NEC)- Maintains garrison network and networked resources. This includes node and user access through Active Directory and host based system security. They maintain web services including email, SharePoint, and post notification systems.

**Portal-** 3d Infantry Division's specific implementation of SP to include structure, appearance, usage characteristics, and access model.

**PowerShell-** Task-based command-line shell and scripting language designed especially for system administration. Built on the .NET Framework, Windows PowerShell helps IT professionals and power users control and automate the administration of the Windows operating system and applications that run on Windows. (TechNet, 2014)

**SharePoint-** (SP)- A web-based application made by Microsoft that performs as a content management system or enterprise content management system.

**Site-** Partition used in a site collection to contain and provide fine-grain permissions to content.

**Site collection-** Top level SharePoint site which includes all sites created below it.

## References


Booch, G., Maksimchuk, R., Engle, M., Young, B., Conallen, J., and Houston, K. (2007). *Object-oriented analysis and design with applications*. Boston: Pearson Education, Inc.

TechNet. (2014). *Scripting with Windows PowerShell*. Retrieved from https://technet.microsoft.com/en-us/library/bb978526.aspx

* TOC
{:toc}
