# Hexo Targets JSON Generator

This small plugin generates `targets.json` file which is necessary for monitoring. It includes links to all the posts.

The result looks like this:
```
[{
  "labels": {
    "project": "project-name"
  },
  "targets": [
    "https://yoursite.com/root/lang/post-slug/",
    "optional-base/lang/post-slug/",
    ...
    ]
}]
```

## Install

```
$ yarn add hexo-targets-json
```

## Configure
It's necessary to add `monitoring` section to your `_config.yml`:

```
# Monitoring
monitoring:
  base: optional-base/
  project: project-name
```

`base` is an optional parameter, which replaces your domain and protocol (check the example in the beggining of this file).
