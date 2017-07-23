---
layout: project
title: Hubs vs switches
project: artifact
published: false
updated: 31 May, 2017
---



Consider a hub like a one-lane, neighborhood street and data flow like household cars. Each car entering or exiting the road has to wait for any other car to go to avoid a collision. If there are few families on that street, then traffic is not a big deal. As the amount of families on that single street increases, there are more cars that are using the same road. Each car still has to wait its turn and delays start to add up. At a certain point congestion becomes an issue causing excessive amount of collisions or congestion. With a neighborhood, this problem is resolved through the use of sub-divisions. By introducing two-lane, parallel, and intersecting streets, not all the neighborhood’s traffic has to use the same street. Different households can use differing routes, decreasing congestion in the neighborhood.

Replacing hubs with switches acts much the same way on network traffic. The switch still provides connections for traffic but it provides each computer with a dedicated network segment. This means that the network can handle more data. At this point, the analogy breaks down because there is more going on with hubs and switches and how they handle network traffic.

A hub is a device that connects network segments together (Pacchiano, 2006). It is sole job is to repeat a message from an inbound port to all the other connected ports. When a message is delivered to the other devices, they look to see if it addressed to them. If it is, they process the data appropriately. If they are not, they drop the message. If one of those devices is another hub, it treats the message in the same manner by passing on to all connected devices.

&&&& SimpleHub.png

When one device connected to the hub is transmitting information, other devices have to wait until it is complete before they can send their network traffic. In situations where there are not many devices on the network, this may not be too much of an issue. Computer communication happens at a very fast rate so the wait times incurred my not even be noticeable. However, as more devices and hubs are added, these wait times increase dramatically because there is more demand placed on the network.

&&&& CompexHub.png

Switches alleviate congestion by handling traffic differently. Each connection between a switch and a device acts like a dedicated hub, passing information back and forth. However, when a message reaches the switch, it does not pass it on to all other connected devices. A switch will look inside a message to see what device it is addressed to and will then forward the message to its destination.

&&&& Switch.png

Since the information flow does not reach all devices, they do not have to wait for access to the network. As long as messages are not bound for the same device, those messages can flow simultaneously, making much more efficient use of network resources.

Resource:

Pacchiano, R. (2006). Router vs switch vs hub: what’s the difference? [http://www.webopedia.com/DidYouKnow/Hardware\_Software/router\_switch\_hub.asp](http://www.webopedia.com/DidYouKnow/Hardware_Software/router_switch_hub.asp)

* TOC
{:toc}
