---
layout: project
title: Portal Design
project: artifact
published: true
updated: 31 May, 2017
---
## Design Introduction

The 3rd Infantry Division’s (3ID) unclassified SharePoint (SP) 2010 portal will be upgraded to SP 2013. The SP in place services the division staff, two brigade combat teams, an aviation brigade, division artillery, a support brigade, and several co-located units. It consists of over 40 site collections each of which contain nested sub-sites organized to reflect the division’s organization chart. SP’s primary use is as an ECM, providing storage and workspace for various operational and administrative documents. Calendars and custom lists are implemented across SP based on the needs and skill levels of the units using them. SP workflows have also been adopted to support certain business processes, particularly as help-desk systems and HR functions.

3ID will be using the migration to reduce the number of site collections, provide the division with a uniform feature set upon which to build future functionality, and re-invigorate a sustainable content management policy. This will ensure that the portal is more usable that the previous portal as well as provide a platform for future ECM improvements.

## Work Breakdown Structure

The table below provides a detailed work breakdown structure (WBS)for the migration from SP10 to SP13. As outlined in the project proposal document, the project is laid out into five separate phases: requirements, analysis and design, implementation, test, and deployment. Each one of these phases has a built-in milestone objective. Approval of the project proposal serves as a transition from phase one to phase two. The design document serves as a milestone for that phase.

&&&& WBS table

## Timeline

The timeline provides a graphical representation of all the major sections. Red time bars indicate critical paths found in the timeline. These are the tasks that the schedule is dependent upon to be executed in time. All other tasks have lead or slack time and will be spaced out appropriately.

For example, under phase 1, “establish migration strategy” and “determine branding standards” are both blue. This indicates that the amount of time they are required to complete does not constrain the time that is needed to develop the proposal document relative to its due date. Both tasks do not have to be started on October 28th. Lead time can be adjusted so that the tasks do not need to be executed in parallel.

Through the analysis and design phase, there is a critical path identified. In this case, the project timeline requires that the “content inventory”, “develop governance policies”, and “develop transition training” all be completed on time. They do not provide any lead or slack time to cushion that phase.

Phases three through five contain five steps that are a part of the critical path. These include “train the content managers”, “delegate responsibilities”, “re-create workflows”, “test”, and “transfer business processes”. Training content managers is the most crucial and complex step of the process. In this step, training will be provided to segments of the content manager (CM) population. Some CMs will be trained and ready to assume responsibilities earlier than others. The trained CMs will be able to start working on their portion of the portal hierarchy and content upload. This is not noted in the WBS for simplicity.

### Timeline milestones

1. Project Proposal Brief
2. System Design Brief
3. CMs in control of respective sites
4. All critical content uploaded to SP13
5. Project completion

&&&& WBS PH1-2
&&&& WBS PH3-5

## Schedule & Dependencies

**Major Dependency \#1: Determine critical features** This task requires that “determine structure” be complete.

**Major Dependency \#2: Establish migration strategy** This task requires that tasks “determine structure”, “determine critical features”, and “identify content needs” be complete.

**Major Dependency \#3: Determine branding standards** This task requires that tasks “determine structure”, “determine critical features”, and “identify content needs” be complete.

**Major Dependency \#4: Project Proposal Document** This task requires that all previous tasks be complete.

**Major Dependency \#5: Phase 2** This task requires that phase 1 be complete.

**Major Dependency \#6: Identify trends** This task requires that task “Survey content type usage” be complete.

**Major Dependency \#7: Establish common content/ list model** This task requires that task “Identify trends” be complete.

**Major Dependency \#8: Establish common content/ list model** This task requires that task “Identify trends” be complete.

**Major Dependency \#9: Develop unit landing site template** This task requires that task “Establish common content list model” be complete.

**Major Dependency \#10: Develop staff collaboration site template** This task requires that task “Establish common content/ list model” be complete.

**Major Dependency \#12: Content management** This task requires that task “Content inventory” be complete.

**Major Dependency \#13: Develop transition training** This task requires that tasks “Develop site templates” and “Develop governance policies” be complete.

**Major Dependency \#14: System design document** This task requires that all tasks in phase to prior to this task be complete.

**Major Dependency \#15: Create second level sites** This task requires that “Establish site collections” task be complete.

**Major Dependency \#16: Implement permissions schema** This task requires that “Create second level sites” task be complete.

**Major Dependency \#17: Delegate responsibilities** This task requires that “Train content managers” task be complete.

**Major Dependency \#18: Create full portal hierarchy** This task requires that “Delegate responsibilities” task be complete.

**Major Dependency \#19: Upload content to SP13** This task requires that “Create full portal hierarchy” task be complete.

**Major Dependency \#20: Deploy branding** This task requires that “Create second level sites” task be complete.

**Major Dependency \#21: Phase 4: Test** This task requires that “Phase 3: Implementation” task be complete.

**Major Dependency \#22: Phase 5: Deployment** This task requires that “Phase 4: Test” task be complete.

## Requirements

**Requirement \#1 Migrate usage from SP10 to SP13:** Functional. The division’s portal hall be migrated from SP10 to SP13.

**Requirement \#2 Access using roles-based permissions:** Functional; security. The portal’s permission schema shall follow Microsoft’s best practices in established ECM permissions using roles-based access control to provide content access.

**Requirement \#3 Establish governance policy:** Functional. The portal shall be maintained using established governance policy.

**Requirement \#4 Continuous user access to content:** Non-functional. The users shall maintain continuous access to content during the migration of the portal with as little disruption to business processes as possible

**Requirement \#5 Zero critical information loss:** The migration shall be performed in a manner that will guarantee that all critical information is moved from SP10 to SP13

**Requirement \#6 Reduced number of site collections:** The minimum number of site collections will be used to manage the portal for the division, accounting for normal document lifecycles and accumulation of information.

**Requirement \# Standardized features across site collections:** The site collections shall have the same features and solutions enabled or accessible across the SP farm.

**Requirement \# Coherent user interface between sites:** The interface will be designed so that users have a consistent experience while navigating between sites.

## Constraints

**Constraint \#1 Limited admin access to farm:** Because of network security concerns, no server on the farm can be manipulated through PowerShell or Visual Studio. Both programs need privileged access where SPD only requires appropriate SP permissions.

**Constraint \#2 Cannot deploy custom or 3rd party solutions:** Related to constraint \#1. NEC does not perform any development work and does not have the manpower to review any custom solutions for installation on the timeframe of this project.

**Constraint \#3 Use of PKI authentication:** PKI authentication is implemented on intranet as a matter of security policy. This method of authentication is not fully compatible with Microsoft Office 2013. While these programs can interact with SP13, full document business processes cannot be implemented.

## Resources

**Resource \#1 SP13 Farm:** Hardware and software. The farm consists of various servers with SP13 installed, maintained by the NEC.

**Resource \#2 SharePoint Designer 2013:** Software. SPD provides a development environment to author workflows inside of SP13. It also provides a means to customize ASPX code found in pages and forms. Can be used to customize lists and libraries faster than SP13’s web interface.

**Resource \#3 Visual Studio:** Software. Network-approved IDE provides HTML and CSS editing capabilities for master page and web-part snippet templates.

**Resource \#4 48 port floor switch:** Hardware. Used to provide network connectivity in a classroom environment for transition training.

## System Overview

### Site architecture

As the finished product, the division will have a portal consisting of a primary site collection, a site collection for each one of the brigades, and a site collection for other tenant units. The primary site collection serves as the top-level site for the division and will contain sub-sites for each of the division staff sections. The four brigade site collections will be nested under the top-level site collection and will contain sub-sites for respective brigade staff sections and subordinate battalions. Further nested in each battalion site, there will be sub-sites for their staff and subordinate companies. Refer to appendix #3.

### Navigation

Site navigation will be based on the echelons in the division's unit topology. At the division level, the site collection's global navigation will emphasize access to division staff sites and provide links to subordinate brigades. The division staff sites are broken down into four categories: command, coordinating staff, special staff, and personal staff. Each category has a folder in the global navigation that will house links to the appropriate staff section sites. Global navigation will persist between all staff sites to provide for a uniform navigating experience regardless of where the user is currently located. Two folders will contain links to subordinate unit site collections and links to tenant unit sites.

Global navigation will use the same approach at each subsequent echelon by focusing on staff site navigation and providing links for subordinate elements. A breadcrumb trail will provide access back up through the echelons to the division site collection.

### Site templates

Two custom site templates will be used to ensure the uniformity of site layout, general content, and features. Most sites on the portal will be used as a collaboration and storage space for work documents. These sites will use a custom template based from a SharePoint team site. They will have a shared document library, an internal document library, a calendar, a promoted links list, and a contact list. They will also have a page that displays a section banner and web-part views of the installed apps. See appendix \#5 for wireframe. The second template used will be used primarily to enable the publishing feature. This will be used to start unit landing pages. Since these pages vary widely between units, they do not contain any standard apps. Units will install them based on the needs of their unit to display information pertinent to their command’s interests.

## Documented Detailed Design…

### Permissions overview

As an inward-facing portal, the NEC limits access to 3ID personnel. Although the user must use PKI authentication to log into their workstation, this login cannot be used to connect to networked resources. Each resource requires a separate logon using the same PKI approach. This ensures that unauthorized access cannot be gained through a logged on but unsupervised workstation.

To provide a fine-grained control of content on the portal, a roles-based access control (Rouse, 2012) will be used.

Three basic roles will be used on the portal:

- Visitor (anyone who is logged into the WAN with a 3ID account)
	- Can view a site, lists, and documents, but cannot make changes
	- Role is in place on all content not deemed sensitive in nature. Personnel, procurement, legal, and other information that require tighter access will be maintained in lists and libraries that have custom permissions enabled.
- Contributor
- Upload and edit content
- Cannot delete lists, libraries, sub-sites
- Two groups on each site will be contributors
	- Members- reserved for members internal to the section
	- Contributors- used for those outside of the section but still must have contributor rights over site content. This group allows for inter-staff collaboration as appropriate.
	-  Groups can be adjusted on content considered sensitive in nature providing appropriate control as needed.
- Owner (CM, IT admin)
	- Full site access. Can do all the above in addition to:
	- Create/ delete libraries, lists, sub-sites
	- Manage site permissions
	- Control site, list, and library configurations

### Site ownership

Where possible, site ownership will be delegated to a trained CM. The CMs will be appointed by their command at the echelon in which they are assigned. Personnel who work at the BDE level will be placed in a site collection owner's group, those at the BN level placed in a BN owner's group, etc. For those units or sections that do not have a trained representative, the echelon above that section will be responsible for the administrative duties for that site.

The CMs will be responsible for the maintenance of permissions groups and enforcement of the division's content management policies. They will also have the authority to create minor changes to their sites such as introducing new document libraries or designing workflows to automate processes at their level. Any significant changes or development work must be approved by BDE or division level leadership.

## Appendices

### $$$$ PortalAssignPerm1-6

### $$$$ PortalSchema

### $$$$ Portal

### $$$$ PortalWorspaceDiagram

## References

Rouse, M. (2012) Role-based access control (RBAC). Retrieved from [http://searchsecurity.techtarget.com/definition/role-based-access-control-RBAC](http://searchsecurity.techtarget.com/definition/role-based-access-control-RBAC)

Booch, G., Maksimchuk, R., Engle, M., Young, B., Conallen, J., and Houston, K. (2007). *Object-oriented analysis and design with applications*. Boston: Pearson Education, Inc.

* TOC
{:toc}
