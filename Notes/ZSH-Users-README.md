# ZSH USERS, PLEASE NOTE WHEN SETTING UP LOCAL ENV

When running a command such as

`pip install --upgrade azureml-sdk[notebooks,contrib] scikit-image tensorflow tensorboardX --user`

You will get the error

`zsh: no matches found: azureml-sdk[notebooks,contrib]`

As you can see installing dependencies using zsh does not work.. This is due to ZSH globbing function (don't ask me what that is!)

To install AzureSDK using zsh shell you must prepend 'noglob' in front of any pip install command that utilises `[ ]` brackets

like so

'noglob pip2 install --upgrade azureml-sdk[notebooks,contrib] scikit-image tensorflow tensorboardX --user'

## Reference

[Github Issue](https://github.com/MicrosoftDocs/azure-docs/issues/15893)

## Microsoft also has another fix (Note mac osx catalina has zsh by default)

use `\` backslashes to disable globbing like so 

Starting with macOS Catalina, zsh (Z shell) is the default login shell and interactive shell. In zsh, use the following command which escapes brackets with "\" (backslash):

`pip install --upgrade azureml-sdk\[notebooks,automl\]`
