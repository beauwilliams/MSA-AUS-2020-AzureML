# Setting up SSH access to your compute

When we are creating our compute on AzureML, we want to enable SSH access, just incase we need it.

## Create an ssh key on your machine

Here we are creating a 4096 bit RSA public-private encryption key pair in the pem format.
Essentially when Microsoft wants to talk to you, it will use your public key as a 'seed' to encrypt the traffic it is sending you. With the private key you have generated earlier, it is trivial to decrypt the traffic azure is sending you. Otherwise, without this private key one would have to crack the 4096bit RSA encryption, which might take a while..!

_It is however theorectically possible to do it within a reasonable amount of time using shors prime factoring algorithm on a quantum computer, but we don't yet have one powerful enough!_

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
`cat <the-name-you-gave-the-ssh-key>.pub | pbcopy`
Now we have copied the contents of that file to our clipboard :grin:
