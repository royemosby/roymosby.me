---
layout: project
title: Portal Closure
project: artifact
published: true
updated: 31 May, 2017
---


## Introduction

### Problem Statement

The 3rd Infantry Division’s (3ID) unclassified SharePoint (SP) 2010 portal will be upgraded to SP 2013. The portal services the division staff, two brigade combat teams, an aviation brigade, division artillery, a support brigade, and several co-located units. It consists of over 40 site collections each of which contain nested sub-sites organized to reflect the division’s organization chart. The portal’s primary use is as an enterprise content management system (ECM), providing storage and workspace for various operational and administrative documents. Calendars and custom lists are implemented across the portal based on the needs and skill levels of the units using them. SP workflows have also been adopted to support certain business processes, particularly as help-desk systems and HR functions.

### Background

The original SP 2010 portal was developed with the aim of high granularity for moving content. The portal’s architecture included 40+ site collections. The thought was that is easier to export and import a whole site collection from a SP server than it is to extract and move content. This sort of migration has never been performed so granularity has not provided the unit with any benefit. However, maintaining 40+ site collections imposed a huge administrative burden. Work performed on one site collection, such as adding functionality or adding new content types, must be redone on every subsequent site collection. Through the years, uneven development effort has left all the site collections with differing solutions and capabilities that may or may not be found on other site collections.[]\#Environment .anchor

### Environment

The installation of SP13 exists beyond the scope of this project as it was installed and is maintained by the NEC. As a lead-up to the project, coordination with the NEC’s server division ensured the establishment of an environment appropriate for a division and its subordinate units was created in the SP farm.

Security is already in place and is not a consideration that has to be fully addressed in this project. As a manner of policy, PKI is used for all network authentication activities. The user has a private key located on a Common Access Card (CAC) that is used for authentication. All services on the network are authenticated into separately and does not use computer logon credentials. Anonymous access to SP is not authorized.

The Network Enterprise Center (NEC) maintains the WAN and infrastructure to include all network services. They do not perform any sort of development work. That is left up to their customers as their focus is primarily on service reliability and security compliance. A tight timeline must be established because of constrains placed upon the NEC. They have several intensive projects that start mid-December so must redirect staff and resources elsewhere. To prevent resource conflict, the migration phases that require NEC support for SP 2013 must be completed by December 2nd.

### Requirements
1. Migrate usage from SP10 to SP13: Functional. The division’s portal shall be migrated from SP10 to SP13.
2. Access using roles-based permissions: Functional. The portal’s 	permission schema shall follow Microsoft’s best practices in 	established ECM permissions using roles-based access control to provide content access.
3. Establish governance policy: Functional. The portal shall be 	maintained using established governance policy.
4. Continuous user access to content: Non-functional. The users shall maintain continuous access to content during the migration of the portal with as little disruption to business processes as possible
5. Zero critical information loss: Non-functional. The migration shall be performed in a manner that will guarantee that all critical information is moved from SP10 to SP13
6. Reduced number of site collections: Functional. The minimum number of site collections will be used to manage the portal for the division, accounting for normal document lifecycles and accumulation of information.
7. Standardized features across site collections: Non-functional. The site collections shall have the same features and solutions enabled or accessible across the SP farm.
8. Coherent user interface between sites: Non-functional. The interface 	will be designed so that users have a consistent experience while navigating between sites.

## Verification plan

### Feedback

Feedback collection for most requirements will consist of verification of task completion by the CMRs. The only requirement that this does not apply to is interface-coherence across the different collaboration sites. Validation of this requirement will be done by consensus of the portal working group.

Prior to the stakeholders reviewing the site structure, a collaboration site template will be built. This template includes content containers (document libraries, calendars, etc.), page layout, and branding styles. This template will be presented to the stakeholders to review for general usability and adherence to branding already used by 3rd Infantry Division. Recommendations for frivolous features or features that detract from usability will be noted but not acted on.

Those recommendations that are relevant to portal usage will be assessed to determine whether they are a general improvement or address a need for a specific unit or function. Those recommendations that address a specific need, for example, a document approval workflow, will be implemented at the location where it is needed. General need recommendations will be worked into the site template then the template will be re-reviewed.

### Criteria

The criteria for incorporating feedback is that it should address the project requirements, both functional and non-functional. Any feedback that did not align with the requirements were recorded for future consideration. Most feedback was gathered after the presentation of the system proposal document. It primarily revolved around tight content migration timelines. This fell under requirements four and five, both of which concern content access and content loss. Then NEC addressed these concerns by allowing the old portal to stay operational longer.

Other feedback that was received but was not incorporated into the project included:

-   **No logon needed to access operational reference content** (operation orders, fragmentary orders, etc). This was outside of the scope of the project and introduced new cybersecurity risks that need to be mitigated.

-   **Access outside of the 3ID domain and on commercial internet**. This was outside of the scope of the project and introduced new cybersecurity risks that need to be mitigated.

-   **View Excel worksheets in browser**. This item is outside of the scope of the project team and has been passed onto the NEC to implement.

### Testing cases

The completion of the site structure will not be directly verified by the portal working group. Instead, the stakeholders will be briefed on the layout as a representation of the organization chart. They will then be guided through several examples sites. Verification of completeness will reside with the senior content managers (CMs) at the brigade level. These individuals will report back to the portal working group when their site and all sub-sites have been made.

Although stakeholders and senior leaders have been briefed about the conceptual differences between the site structure and content presentation, enough of them remain uncertain as to their differences. Due to this, branding and user experience will be validated at the time that the portal structure is presented. While the stakeholders are being led through the example sites, the navigational approach and collaboration site uniformity will be highlighted.

Governance, as an ongoing responsibility does not lend itself to a single assessment. An initial assessment can ensure that a governance baseline has been established across the unit but is not sufficient for the maintenance of the system. Initially, governance adoption will be verified by looking at the applied permissions groups and user assignment trends. This will be performed by the project lead and several other knowledgeable CMRs who are also a part of the portal working group. These individuals will ensure that the permissions schema is adhered to and that users are being placed into appropriate groups. Ongoing assessments, both formal and informal, are required after a baseline has been established.

The requirements covering continuous user access and zero loss of critical information will be verified by the senior CMRs, like site structure. Since the cut-over from one portal to the next will be directed at the local levels, both portals will remain in operation. At such time is identified by the CMRs, the old portal sites will be placed into read-only mode. No further work can be processed by users on the old portal, but they will still have access to the content that it contains. This provides them with the opportunity to retrieve content that was overlooked.

## Postmortem Summary
### Methodologies

This project used a macro-process (Booch et al., 2007) since this methodology is accommodating for general phases. The macro process allowed for the project to be divided up into several distinct phases that had milestone touch-points. The use of five phases in this project provided the stakeholder’s group with an easy tool to keep track of progress across the sub-units.

1.  Requirements – Establish scope and bounds of a project. Allows the PM and stakeholders to define the problems to be addressed by the system.

2.  Analysis and design- Translates the requirements into system 	specifications. Development work performed on system.

3.  Implementation- Actual system emplaced

4.  Test- Analysis of implementation to determine its suitability in 	addressing the projects requirements. Correction of any system flaws identified

5.  Deployment- Implementation of system that satisfies identified by project stakeholders.

Phases one and two used a waterfall method because all the work at that point was centralized. Requirements were gathered by the project manager and the portal working group. These were assembled into the project proposal document which was presented to a stakeholders’ group consisting of select leadership and section leads. Their feedback was taken back to the portal working group to begin on analysis and design phase.

At this point, CMRs were identified and given opportunity to contribute to the project by providing local assessments of content and portal usage.

Phases three through five used an agile methodology to get frequent stakeholder feedback on specific implementation and to allow for varying timelines for distributed work. During the implementation phase the CMRs were free to move from finished tasks to new tasks without having to wait for other sections to catch up. This also allowed the project manager and select CMRs to provide additional assistance where it was needed.

The testing phase was mostly distributed and relied on reports back from senior CMRs to verify completion. The stakeholder group also spot-checked to ensure that subordinate units were using the prescribed approaches for developing site hierarchies and permissions groups.

### Method evaluation

Because of the scope of the project, it was understood that some subordinate units would reach milestones earlier than others. This was due to differing training schedules and personnel availability. After the analysis and design phase, when the CMR training would be complete, many tasks fell to individual subordinate units. Rather than hold them in place until all involved hit a milestone, they were permitted continue until they were completed with all tasks that they could accomplish on their own.

This approach served the project well by allowing the portal workgroup to assess progress and redirect supplemental effort towards those that needed it. During phases one and two, all work was done by the project manager and a portal working group. The waterfall method allowed the workgroup to gather information about the project and put together a comprehensive but flexible project proposal. On the conclusion of the analysis and design phase, all CMRs were certified as trained representatives. They could then go back to their units an initiated work on their section of the portal to ready it for use.

The use of Agile approach allowed CMRs to work collaboratively with their command on unit landing pages. They could iterate on their page layouts until they met the needs of their unit without the need to follow a pre-described plan or revision of the project plan and design documents. The supervisory role that the working group took at this time allowed them keep the CMRs on task and reassign effort where it was needed so that all subordinate units had functional sites.

### Risk Mitigation

Communication proved to be the most prominent risk in this project. A combination of disperse locations and differing operating schedules made it impossible to get all stakeholders together during regular meetings even by electronic means. Although information from the meetings was captured and distributed by email to those who could not attend, it was difficult to get all stakeholder on the same footing. This could have been due to any number of reasons including lost emails, competing priorities, or apathy.

One mitigation that proved to be useful was frequent, informal audits. One of the supervisory stakeholders would visit the different sites as they were being developed. They would review to verify that **1.) work was being done** and **2.) if they were adhering to the permissions schema**. Since uneven development and incorrect assignment of permissions were two identified issues from the previous portal, these were prime indicators that remediation was needed.

## Project status
### Objectives

The stakeholder workgroup has outlined several goals to be reached to consider the project a success. Each goal has a few specific objectives to be achieved to meet the goal.

**\#1) Provide a consistent set of features across all the site collections and sites.**  

&&&& Table1

All objectives have been met under this requirement have been met.

**\#2) Decrease the burden of site collection administration through consolidation.**

The migration team will examine the current portal structure to consolidate as many site collections as possible. Considerations will include the topological organization of the command, the amount of data generated inside each section, and the amount of traffic each section receives.

&&&& Table2

  All objectives have been met under this requirement have been met.

**\#3) Provide a consistent user experience across all sites though uniform layouts.**

Consistent user experience will be provided using pre-populated publishing site and team site templates. They will provide a similar set of apps so that each site is intuitively used in a similar manner across the entire portal.

&&&& Table3

The first two objectives have been met. The final will be met when two battalion sized elements receive buildout assistance from the project manager. The estimated time of completion is the 17th of February.

**\#4) Provide a brand standardization for current and future sites.**

Closely tied to the site templates, master pages will provide styling that provides a professional look and feel.

&&&& Table4

All objectives have been met under this requirement have been met.

**\#5) Users should have an easy time finding reliable content.** *metrics: 0 failed searches relating to terms found in the organization’s ontology. 50% less user self-reported search frustration over a 6-month period\*

Portal governance will be established by the migration team and then enforced by section representatives responsible for a portion of the portal. Where possible, governance mechanisms will be embedded into the functions of the portal so that compliance is in line with usage. This can be done through field validation, content retention policies, and workflows. Efforts will be put into a thorough content inventory to include documents, lists and calendar entries, and workflows. As items are identified, they will go through a screening process to ensure that only information of value makes it through the migration. All suitable content will be backed up on local admin computers, then ported over to the new SP as sites become available.

&&&& Table5

Tied to sub-site creation under requirement \#3 this objective will be completed after the two sub-units receive assistance from the project manager. Estimated completion is 20 February.  

### Issues

Asides from the two battalion-sized elements (one battalion and one squadron) that require additional assistance the largest issues this project faces are web services for Office and search. At this point, neither one of these features work. The NEC is aware of these problems and are troubleshooting. Since installation and maintenance of the servers and network services are a NEC responsibility, these issues are beyond the direct stakeholder control.

### Alternatives/ recommendations

No workarounds were required to keep with the project timeline.

## Future enhancements

There are several features that SharePoint contains that are not currently used. We currently do not have any application services working. This would allow people to edit Excel worksheets or Word documents in the browser without having to download or upload files as frequently.

Another immediate enhancement would be to incorporate request forms into SharePoint workflows. Sections often provide a service during their duties. For example, G4, a staff section at the division level handles logistics. One of these services is hot meal delivery for individuals in the field. Out in the field, the units usually have continuous access to the network. Instead of a person coming in from the field to fill out a paper request, one could be placed online and processed. Business dashboards are another improvement that are being considered. These can be used to provide commanders across the division easy access to readiness and strength numbers. They can also be used to maintain a common operating picture- brief information about their unit’s supply levels, vehicle maintenance status, and other information points that commanders use to make decisions. The use of business dashboards would require a deeper adoption of the portal. It presently serves as an ECM that houses mostly discreet packages of information- documents, Excel worksheets, PDFs, etc. As this content exists, the information that they contain is not easily accessible to populate dashboards.

## Implementation support

The implementation of the SharePoint farm and the SP web application resided with NEC, as they are responsible for all networked resources. Because of this, the project manager worked with them prior to the project inception to establish a baseline site structure. Authentication and resource security are applied at their level and is also beyond the scope of this project. Implementation support is built into the project plan from inception. The size and distributed nature of the project requires that much of the manual work be delegated to the CMRs. They receive guidance from the project manager and the portal working group. They also were trained by the project manager on the specific tasks to be accomplished. An open line of communication between the project manager and all the CMRs ensured that they would be able to have any questions they had about the project answered.

Throughout the build process starting in the implementation phase, senior stakeholders performed periodic, informal audits to check on progress and adherence to governance standards. Work done on branding products was performed by the project manager. A baseline master page and accompanying stylesheet were made, approved by stakeholders, then applied to the division staff site collection. This baseline product was then presented to senior CMRs at the brigades and provided options to customize the color scheme to match unit symbols. Once those colors were changed in the stylesheets, the master page and stylesheet was then implemented on the brigade site collections.

## Maintenance plan

Web application maintenance remains with the NEC and is beyond the scope of this project. Any performance issues or data recovery required because of loss will be addressed on a case by case basis by the project manager communicating with the NEC.

The project manager, who is also the Division content management non-commissioned officer (CM NCO), will assume ongoing responsibility for governance of the portal. In this role, they will enforce page appearance standards, permissions best practices, as well as appropriate usage across the portal. The CM NCO will work directly with the CMRs found in the division staff, acting in a supervisory role. THE CM NCO will also review brigade and their subordinate unit sites and communicate deficiencies to senior CMRs found at the brigade level. They will also assist any unit that requires additional support in establishing custom permissions or workflows.

The CMRs will be responsible for the daily administrative tasks found at the level where they reside. These duties will primarily involve maintaining permissions groups on their sub-site/(s); creating and deleting lists, libraries, and sub-sites; and creating local workflows. They will also work with their commands to determine relevant information to be displayed on unit landing sites and will be responsible for keeping it accurate and updated.

Appendix

-   Templates (Annex 1)
	-   Staff site layout and content
	-   Portal topography
	-   Global navigation layouts
	-   Permissions
-   Training overview (Annex 2)
-   Knowledge Management (KM) SOP and CM SOP excerpts (Annex 3)
-   Site establishment tracking matrix (Annex 4)
-   Master page HTML (Annex 5)
-   Master page CSS (Annex 6)
-   Promoted links modification CSS (Annex 7)
-   Collaboration site screen captures (Annex 8)

References

Booch, G., Maksimchuk, R., Engle, M., Young, B., Conallen, J., and Houston, K. (2007). *Object oriented analysis and design with applications* [3rd ed.]. Boston: Pearson Education, Inc.
