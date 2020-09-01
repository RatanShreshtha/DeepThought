+++
title = "Workstation Setup Using Ansible"
description = "Configure your fedora machine in just one go."
author = "Ratan Kulshreshtha"
date = 2018-09-12T11:24:57+05:30
[taxonomies]
categories = ["Blog"]
tags = ["ansible", "workstation", "fedora"]
+++


I use Fedora on my Dell Vostro 3560, and I have a habit of reinstalling fedora whenever new version of Fedora is released thus I have to install many things in my machine and configure many things again and again and sometimes I forgot something to install or sometimes I forgot to configure something so I asked myself is there a way to do this in a way which is immune to human errors or how can I automate all this ?

<figure class="image center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/100px-Ansible_logo.svg.png" style="max-width: 128px">
        </figure>


<!-- more -->

Suddenly I thought why not use *Ansible* to do my workstation setup which is an extremely popular open-source configuration management and software automation project. And Ansible’s idempotent, declarative syntax lends itself perfectly to describing how a system should be configured.

So I have written a playbook to configure your fedora workstation and this resides at [RatanShreshtha/Workstation-Setup](https://github.com/RatanShreshtha/Workstation-Setup) this playbook will install basic media software to necessary development dependencies to cool wallpapers.

I hope you will find this playbook useful and feel free to make some changes like also making it compatible with debian/ubuntu.

I appreciate any feedback.