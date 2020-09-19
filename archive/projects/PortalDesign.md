---
layout: project
title: Portal Design
project: artifact
published: true
updated: 31 May, 2017
---

<div class="large reveal reflection" id="portalDesign" data-reveal>
<h1>Portal Design</h1>
<h3>Intranet portal migration from SharePoint 2010 to 2013</h3>
<h4>winter of 2016-2017</h4>
<p>This project is unique from the others in my portfolio because it is a real-world application of skills developed up to that point. I had the luck that this project executed roughly on the same timeline as IT415 and IT420, from October 2016 to February 2017. My IT capstone classes focused on the SDLC- IT415 addressing inception and elaboration phases while IT420 focused on the construction and transition phases.</p>

<p>This artifact illustrates my communication skills as it involved reaching out to stakeholders to share timelines and requirements. In turn, I collected their feedback in the form of their needs, constraints, and limitations then integrated these elements into a course of comprehensive action presented to leadership for approval.</p>

<p>While the capstone focused on learned skills and not developing new, I gained new insights to the complexities of IT project development. In particular, communication in an distributed, ever-moving environment is a challenge. The hardest part of this project was being able to reliably communicate with all the subordinate units who had differing training schedules. At times, certain units would not receive a request for information or choose not to act in a timely manner on it. They would then be out of sync with the the progress made up to that point.</p>

<p>When the project focus had moved elsewhere, those behind would try to get the shareholders to circle back to an issue that was already addressed and closed for consideration. At points like this, the workgroup emphasized the importance of moving the timeline forward and only stoped with a significant exception arose. Only one such exception came up- that of catching up a unit that had recently came off of deployment after the project started.</p>

<p>Looking back on this project, I would have engaged official communications channels more to get more involvement from the subordinate units. As it stood, only one operational order (OPORD) was delivered addressing the timeline and the requirements of the subordinate units. In hindsight, this OPORD needed to be followed up by continuous fragmentary orders (FRAGORD) outlining more specific details and provide changes to the timeline as needed. The FRAGORDs, because of their nature, would have put the units under additional scrutiny of the Division staff, compelling them to give the project the attention it needed.</p>

    <button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span>
    </button>
</div>
<h4>winter of 2016-2017</h4>

## Design Introduction


The 3rd Infantry Division’s (3ID) unclassified SharePoint (SP) 2010 portal will be upgraded to SP 2013. The SP in place services the division staff, two brigade combat teams, an aviation brigade, division artillery, a support brigade, and several co-located units. It consists of over 40 site collections each of which contain nested sub-sites organized to reflect the division’s organization chart. SP’s primary use is as an ECM, providing storage and workspace for various operational and administrative documents. Calendars and custom lists are implemented across SP based on the needs and skill levels of the units using them. SP workflows have also been adopted to support certain business processes, particularly as help-desk systems and HR functions.

3ID will be using the migration to reduce the number of site collections, provide the division with a uniform feature set upon which to build future functionality, and re-invigorate a sustainable content management policy. This will ensure that the portal is more usable that the previous portal as well as provide a platform for future ECM improvements.

## Work Breakdown Structure

The table below provides a detailed work breakdown structure (WBS)for the migration from SP10 to SP13. As outlined in the project proposal document, the project is laid out into five separate phases: requirements, analysis and design, implementation, test, and deployment. Each one of these phases has a built-in milestone objective. Approval of the project proposal serves as a transition from phase one to phase two. The design document serves as a milestone for that phase.

*Note: this table is has horizontal-scroll enabled on narrower screens*

<div class="table-scroll">
<table>
<tr><td>Task #</td><td>WBS</td><td>Name</td><td>Duration</td><td>Start</td><td>Finish</td><td>Predecessors</td></tr>
<tr><td>1</td><td>1</td><td>Phase 1: Requirements</td><td>16d</td><td>10/24/16</td><td>11/14/16</td><td></td></tr>
<tr><td>2</td><td>1.1</td><td>Determine structure</td><td>2d</td><td>10/24/16</td><td>10/25/16</td><td></td></tr>
<tr><td>3</td><td>1.1.1</td><td>Site collection needs</td><td>2d</td><td>10/24/16</td><td>10/25/16</td><td></td></tr>
<tr><td>4</td><td>1.1.2</td><td>Site hierarchy</td><td>1d</td><td>10/24/16</td><td>10/24/16</td><td></td></tr>
<tr><td>5</td><td>1.2</td><td>Determine critical features</td><td>2d</td><td>10/26/16</td><td>10/27/16</td><td>2</td></tr>
<tr><td>6</td><td>1.3</td><td>Identify content needs</td><td>2d</td><td>10/26/16</td><td>10/27/16</td><td>2</td></tr>
<tr><td>7</td><td>1.3.1</td><td>Unit landing sites</td><td>2d</td><td>10/26/16</td><td>10/27/16</td><td></td></tr>
<tr><td>8</td><td>1.3.2</td><td>Staff collaboration sites</td><td>2d</td><td>10/26/16</td><td>10/27/16</td><td></td></tr>
<tr><td>9</td><td>1.4</td><td>Establish migration strategy</td><td>2.5d</td><td>10/28/16</td><td>11/1/16</td><td>2/5/06</td></tr>
<tr><td>10</td><td>1.5</td><td>Determine branding standards</td><td>2d</td><td>10/28/16</td><td>10/31/16</td><td>2/5/06</td></tr>
<tr><td>11</td><td>1.6</td><td>Project Proposal Document</td><td>2d</td><td>11/11/16</td><td>11/14/16</td><td>2/5/6/9/10</td></tr>
<tr><td>12</td><td>2</td><td>Phase 2: Analysis and design</td><td>19d</td><td>11/15/16</td><td>12/9/16</td><td>1</td></tr>
<tr><td>13</td><td>2.1</td><td>Content inventory</td><td>5d</td><td>11/15/16</td><td>11/21/16</td><td></td></tr>
<tr><td>14</td><td>2.1.1</td><td>ID critical information</td><td>5d</td><td>11/15/16</td><td>11/21/16</td><td></td></tr>
<tr><td>18</td><td>2.1.2</td><td>Remove old/inaccurate/obsolete</td><td>5d</td><td>11/15/16</td><td>11/21/16</td><td></td></tr>
<tr><td>19</td><td>2.2</td><td>Develop site templates</td><td>7d</td><td>11/15/16</td><td>11/23/16</td><td></td></tr>
<tr><td>20</td><td>2.2.1</td><td>Survey content type usage</td><td>3d</td><td>11/15/16</td><td>11/17/16</td><td></td></tr>
<tr><td>21</td><td>2.2.2</td><td>Identify trends</td><td>1d</td><td>11/18/16</td><td>11/18/16</td><td>20</td></tr>
<tr><td>22</td><td>2.2.3</td><td>Establish common content/ list model</td><td>1d</td><td>11/21/16</td><td>11/21/16</td><td>21</td></tr>
<tr><td>26</td><td>2.2.4</td><td>Develop unit landing site template</td><td>2d</td><td>11/22/16</td><td>11/23/16</td><td>22</td></tr>
<tr><td>30</td><td>2.2.5</td><td>Develop staff collaboration site template</td><td>2d</td><td>11/22/16</td><td>11/23/16</td><td>22</td></tr>
<tr><td>34</td><td>2.3</td><td>Develop governance policies</td><td>10d</td><td>11/15/16</td><td>11/28/16</td><td></td></tr>
<tr><td>35</td><td>2.3.1</td><td>Permissions schema</td><td>1d</td><td>11/15/16</td><td>11/15/16</td><td></td></tr>
<tr><td>36</td><td>2.3.1.1</td><td>Roles</td><td>1d</td><td>11/15/16</td><td>11/15/16</td><td></td></tr>
<tr><td>37</td><td>2.3.1.2</td><td>Groups</td><td>1d</td><td>11/15/16</td><td>11/15/16</td><td></td></tr>
<tr><td>38</td><td>2.3.2</td><td>Content management</td><td>5d</td><td>11/22/16</td><td>11/28/16</td><td>13</td></tr>
<tr><td>39</td><td>2.3.3</td><td>Delegation of responsibility</td><td>5d</td><td>11/15/16</td><td>11/21/16</td><td></td></tr>
<tr><td>42</td><td>2.4</td><td>Develop transition training</td><td>3d</td><td>11/29/16</td><td>12/1/16</td><td>19/34</td></tr>
<tr><td>47</td><td>2.5</td><td>Develop branding</td><td>5d</td><td>11/15/16</td><td>11/21/16</td><td></td></tr>
<tr><td>50</td><td>2.6</td><td>System design document</td><td>6d</td><td>12/2/16</td><td>12/9/16</td><td>13/19/34/42/47</td></tr>
<tr><td>51</td><td>3</td><td>Winter break</td><td>16d</td><td>12/12/16</td><td>1/2/17</td><td>12</td></tr>
<tr><td>52</td><td>4</td><td>Phase 3: Implementation</td><td>25d</td><td>1/3/17</td><td>2/6/17</td><td>51</td></tr>
<tr><td>53</td><td>4.1</td><td>Establish site collections</td><td>2d</td><td>1/3/17</td><td>1/4/17</td><td></td></tr>
<tr><td>54</td><td>4.2</td><td>Create second level sites</td><td>3d</td><td>1/5/17</td><td>1/9/17</td><td>53</td></tr>
<tr><td>57</td><td>4.3</td><td>Implement permissions schema</td><td>4d</td><td>1/10/17</td><td>1/13/17</td><td>54</td></tr>
<tr><td>58</td><td>4.3.1</td><td>Create site collection and 2nd lvl site permissions groups</td><td>4d</td><td>1/10/17</td><td>1/13/17</td><td></td></tr>
<tr><td>59</td><td>4.3.2</td><td>Assign site permissions roles to permissions groups</td><td>4d</td><td>1/10/17</td><td>1/13/17</td><td></td></tr>
<tr><td>60</td><td>4.4</td><td>Train content managers</td><td>14d</td><td>1/3/17</td><td>1/20/17</td><td></td></tr>
<tr><td>61</td><td>4.5</td><td>Delegate responsibilities to CMs</td><td>2d</td><td>1/23/17</td><td>1/24/17</td><td>60</td></tr>
<tr><td>64</td><td>4.6</td><td>Create full portal hierarchy</td><td>4d</td><td>1/25/17</td><td>1/30/17</td><td>61</td></tr>
<tr><td>68</td><td>4.7</td><td>Migrate Content</td><td>25d</td><td>1/3/17</td><td>2/6/17</td><td></td></tr>
<tr><td>69</td><td>4.7.1</td><td>Backup content from SP10</td><td>7d</td><td>1/3/17</td><td>1/11/17</td><td></td></tr>
<tr><td>73</td><td>4.7.2</td><td>Upload content to SP13</td><td>5d</td><td>1/31/17</td><td>2/6/17</td><td>64</td></tr>
<tr><td>79</td><td>4.8</td><td>Deploy branding</td><td>1d</td><td>1/10/17</td><td>1/10/17</td><td>54</td></tr>
<tr><td>82</td><td>5</td><td>Phase 4: Test</td><td>5d</td><td>2/7/17</td><td>2/13/17</td><td>52</td></tr>
<tr><td>83</td><td>5.1</td><td>Verify hierarchy completeness</td><td>5d</td><td>2/7/17</td><td>2/13/17</td><td></td></tr>
<tr><td>84</td><td>5.2</td><td>Verify permissions implementation</td><td>5d</td><td>2/7/17</td><td>2/13/17</td><td></td></tr>
<tr><td>85</td><td>5.3</td><td>Verify content transfer</td><td>5d</td><td>2/7/17</td><td>2/13/17</td><td></td></tr>
<tr><td>86</td><td>5.4</td><td>Verify master page/ web-part styles usability</td><td>5d</td><td>2/7/17</td><td>2/13/17</td><td></td></tr>
<tr><td>87</td><td>5.5</td><td>Address issues</td><td>5d</td><td>2/7/17</td><td>2/13/17</td><td></td></tr>
<tr><td>88</td><td>6</td><td>Phase5: Deployment</td><td>10d</td><td>2/14/17</td><td>2/27/17</td><td>82</td></tr>
<tr><td>89</td><td>6.1</td><td>Provide users with access</td><td>5d</td><td>2/14/17</td><td>2/20/17</td><td></td></tr>
<tr><td>90</td><td>6.2</td><td>Transfer business processes</td><td>10d</td><td>2/14/172/27/17</td><td></td></tr>
</table>
</div>

## Timeline

The timeline provides a graphical representation of all the major sections. Red time bars indicate critical paths found in the timeline. These are the tasks that the schedule is dependent upon to be executed in time. All other tasks have lead or slack time and will be spaced out appropriately.

For example, under phase 1, “establish migration strategy” and “determine branding standards” are both blue. This indicates that the amount of time they are required to complete does not constrain the time that is needed to develop the proposal document relative to its due date. Both tasks do not have to be started on October 28th. Lead time can be adjusted so that the tasks do not need to be executed in parallel.

Through the analysis and design phase, there is a critical path identified. In this case, the project timeline requires that the “content inventory”, “develop governance policies”, and “develop transition training” all be completed on time. They do not provide any lead or slack time to cushion that phase.

Phases three through five contain five steps that are a part of the critical path. These include “train the content managers”, “delegate responsibilities”, “re-create workflows”, “test”, and “transfer business processes”. Training content managers is the most crucial and complex step of the process. In this step, training will be provided to segments of the content manager (CM) population. Some CMs will be trained and ready to assume responsibilities earlier than others. The trained CMs will be able to start working on their portion of the portal hierarchy and content upload. This is not noted in the WBS for simplicity.

**Timeline milestones**

1. Project Proposal Brief
2. System Design Brief
3. CMs in control of respective sites
4. All critical content uploaded to SP13
5. Project completion

**WBS Phases 1 and 2**

![Work breakdown structure phases 1 and 2](/images/WBS-Ph1-2.png)

**WBS Phases 3-5**

![Work breakdown structure phases 3 through 5](/images/WBS-Ph3-5.png)

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

<div class="responsive-embed">
	<iframe width="420" height="315" src="/presentations/portal-design.html" frameborder="1"></iframe>
</div>


## References

Rouse, M. (2012) Role-based access control (RBAC). Retrieved from [http://searchsecurity.techtarget.com/definition/role-based-access-control-RBAC](http://searchsecurity.techtarget.com/definition/role-based-access-control-RBAC)

Booch, G., Maksimchuk, R., Engle, M., Young, B., Conallen, J., and Houston, K. (2007). *Object-oriented analysis and design with applications*. Boston: Pearson Education, Inc.

* TOC
{:toc}