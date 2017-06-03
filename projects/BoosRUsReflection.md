---
layout: page
title: Books-R-Us Reflection
published: true
updated: 31 May, 2017
---

## IT-489-02: Develop a professional identity from which to make globally, socially, and ethically responsible information technology and systems decisions that are in line with legal and organizational policy requirements

### IT431: Books-r-us sales and inventory management system
This project is a recommendation for an inventory management system (IMS) made in anticipation of a regional expansion of Books-R-Us, a fictitious company. It is a final project submitted for IT431-Software Development for Distributed Systems in August-September of 2016. The project focuses on the distributed nature of the IMS and includes business process use cases and addresses security concerns for internal database transactions and external customer purchase transactions.
This project built on my understanding of the system development lifecycle(SDLC) and introduced challenges that one has to address in distributed systems:
- heterogeneity
- openness
- security
- scalability
- failure handling
- concurrency
- transparency
- quality of service
This artifact demonstrates the portfolio’s second objective in two ways. First, the proposed technologies outlined in the document satisfy the business needs of Books-R-Us to support business processes and the customers the business serves. Second, is that I am able to address security requirements that incorporate appropriate technologies to protect access to the distributed system and the data found inside of it.
The complexity of the project made it challenging to address all the differing requirements without conflicting with each-other. For example, client access to the system had to be treated differently than customer access but both should have access to up-to-date inventory information. Employees used systems that were internal to Books-R-Us’ WAN but customers accessed the IMS from outside of the network. They both had access to the same inventory information but accessed it through differing channels and had differing rights over the manipulation of data it contained.
Were I to approach this project again, I would create a proof-of-concept as a deliverable to demonstrate the workings of the system. A paired down version would include two differing web stacks and a shared database- one web-stack would be for employees and the other for customers.
