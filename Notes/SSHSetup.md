# These instructions are for Mac/Linux users only. Windows users please visit this page for Microsoft provided instructions


https://docs.microsoft.com/en-gb/azure/virtual-machines/linux/ssh-from-windows

# Setting up SSH access to your compute

When we are creating our compute on AzureML, we want to enable SSH access, just incase we need it.
Note: These instructions are for Mac/Linux users only (+Windows users using subsystem for linux.

## Change to the directory that stores your ssh keys

What we are going to do here is use the cd "change directory" command to open up the folder that stores the ssh key on our computer.
Make a note of the `~` character here, this is an old unix convention, on very early computers used at Berkeley a.k.a BSD (specifically the Lear-Siegler ADM-3A computer) there was a key labelled HOME in the very top right corner of the keyboard, which was also used if you wanted type `~`. That keyboard design inspired the convention that `~` would mean "home" on UNIX based systems. 

![](https://rollmops.files.wordpress.com/2006/04/Lear_Siegler-ADM3A_1805.jpg)

_What is home?_
Home is your home directory, such as /Users/yourname/

In other words `~/.ssh` corresponds to the directory (depending on your system), for example on a mac `/Users/yourusername/.ssh`


### Step 1: Run the below command
`cd ~/.ssh`

## Create an ssh key on your machine

Here we are creating a 4096 bit RSA public-private encryption key pair in the pem format.
Essentially when Microsoft wants to talk to you, it will use your public key as a 'seed' to encrypt the traffic it is sending you. With the private key you have generated earlier, it is trivial to decrypt the traffic azure is sending you. Otherwise, without this private key one would have to crack the 4096bit RSA encryption, which might take a while..!

_It is however theorectically possible to do it within a reasonable amount of time using shors prime factoring algorithm on a quantum computer, but we don't yet have one powerful enough!_

### Step 2: Run the below command

`ssh-keygen -m PEM -t rsa -b 4096` Note: Remember to give it a meaningful name

## Copy the public key you have just generated to your clipboard


Now we want to copy that public key to our clipboard so that we can paste it into the AzureML dashboard
What we will use is the `pbcopy` function in our terminal
The `pbcopy` command will need some text input, so that it can perform its function
You might recognise the terms `stdin` and `stdout`, in plain terms they refer to standard-in and standard-out.
In a programming langauge, you might want to print some text to your terminal such as "Hello World!"

In order to do this, we must interface with a real life computer, but luckily we have a programming language with a built in module, such as the println() function, so we need not worry! We can simply pass text into this function. The rest of the complexity is abstracted from us. No need to learn bytecode. Woo!

So.. in other words, stdin is a functionality that allows us to pass inputs and outputs from out terminal commands using the pipe function `|`

_I'll show you what I mean_

We are going to use `cat` to copy the contents of the file, then we are going to "pipe" the output of that command _into_ the `pbcopy` command

Like so.. we will generate data from the first command, and pass it into the second command, here `pbcopy`

### Step 3: Run the below command
`cat <the-name-you-gave-the-ssh-key>.pub | pbcopy`

Now we have copied the contents of that file (our public SSH key) to our clipboard :grin:

## Load the SSH key into your SSH Agent

When we want to connect to our AzureML compute, we need to provide the SSH key in order to decrypt the traffic. What we will do with `ssh-add` is load that file up so it is ready when we try to connect to our AzureML instance.

### Step 4: Run this command

`ssh-add ~/.ssh/nameofyoursshkey`

## Paste SSH key into Azure

## SSH into the compute once it has spun up

## Update Scikit learn

## Terminate the session


