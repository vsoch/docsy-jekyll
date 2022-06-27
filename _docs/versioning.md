---
title: Versioning your Docs
description: How to turn on and use versioning
---

# Versioning

Versioning documentation is a useful feature that can be achieved using Docsy Jekyll. It allows you to take snapshots of your documentation that may align with a specific version of a product or service, or you may wish to just keep a historical view of the changes that have been made to your documents over time.

{% include alert.html type="info" title="Note: This only allows you to version documents inside the _docs folder, it does not allow you to version any files outside of that, such as Pages, Posts etc." %}

The following information will take you through the detailed setup of versioning your documentation but in summary there will be four tasks that need to be completed to version your documents.

1. Copy the current _docs content into a subfolder of _docs/Archive (e.g., within a folder named by the version)
2. Add a corresponding table of contents to _data/versions
3. Update the _data/toc-mapping.yml file to point the new table of contents
4. Test your site locally to ensure it works as expected!

## Implementation

The way in which versioning is achieved is by duplicating your whole document directory and placing it inside an 'archive' subdirectory with the name of that version. The following illustrates what the base document root looks like *without* another version for this Docsy Jekyll site.

```
document root
│      
└─── _data
└─── _docs
        └─── extras
        └─── subfolder
        example-page.md
        getting-started.md
        subfolder.md
        versioning.md
```
To create a version of this documentation we first create a folder with the version name we want to use inside of the 'archive' folder and copy all the files and folders from our root _docs folder into that new folder. You could use the following commands to achieve this:

```shell
# Our last release is version "Previous" (could also be 1.0.0 or semver), we are pinning the docs to this version`
mkdir -p _docs/Archive/Previous
# copy all content under _docs except Archive into this new folder.`
cp -r _docs/!(Archive) _docs/Archive/Previous
```

After we do this, we end up with a structure shown below - the older documentation is moved into the folder 'Previous'. This step effectively takes a snapshot of our documents at a point in time and the expectation is that we will no longer maintain these pages. If you look at the structure of this site you will see the 'Previous' folder, which now holds our previous documentation, does not contain the versioning.md markdown file as this is new in the current release. This means that if you look at this page on the current site and then choose "Previous" from the version dropdown, you will get a 404 error (not found).

<pre><code>
document root
│      
└─── _data
└─── _docs
        └─── extras
        └─── subfolder
        └─── Archive
              └─── <span style="color:blue;"><b>Previous</b></span>
                  └─── extras
                  └─── subfolder
                  example-page.md
                  getting-started.md
                  subfolder.md
        example-page.md
        getting-started.md
        subfolder.md
        versioning.md
</code></pre>

You would now continue to add, update or remove markdown files from the main _docs directory in order to work on the current version of your documentation. 

Once the versioning has been correctly configured and you have created a snapshot, you can access those documents by adding the version to the url to access that archived version (e.g. /docs/Archive/Previous/getting-started). 

To enable the users to interact with these versioned documents through the UI there needs to be some updates to the _config.yml file to setup and enable it. The following is a snippet from the _config.yml file specific to the versioning options that are available.

```yml
version_params:
  version_menu: "Release"
  version_dir: Archive
  tocversion_dir: versions
  versioning: true
  latest: current
  allow_search: true  
  search_versions:
    - main
    - current
    - beta
  versions:
    - main
    - current
    - beta
    - v3.1
    - v3.0.1
    - v3.0
    - v2.4.5
    - v2.4.4
```

### Versioning Options


| Parameter | Description | Values |
| --------- | ----------- | ------ | 
| versioning | This determines whether the versioning functionality is enabled | true \| false 
| version_menu | In addition to the version dropdown you can specify some text to display alongside it<br/> If you do not wish to use this then make this value an empty string | Release
| version_dir | This is the directory where all the alternative versions of the documentation will be contained beneath the _docs directory <br/>i.e. setting this to the value of Archive (Note: **No** trailing slash) will mean all alternative versions will be found in _docs/Archive/ | Archive
|  tocversion_dir | This is the directory inside your _data directory where Docsy Jekyll will find the alternative TOC files that are used for other versions of the documentation. You can configure this to be whatever name you like, just ensure your other TOCs can be found there! | versions 
| latest | From the list of versions this determines the one which relates to your base docs directory.<br/> Note the url for your docs will not contain a version identifier for this particular version| current \| v3.1
| allow_search | A boolean to indicate if we should allow searching over versions. If False, only the current is displayed in results | true \| false 
| search_version | A list of versions to include in the search. Current or latest will be tagged with the site.tag_color, the rest will be gray | current \| previous
| versions | A list of versions you wish to display in the version dropdown <br/> Note that there are several special keywords that can be used: current, main, alpha, beta, rc and pre, see below for more details  | current \| v1.0 \| v2.1.3

{% include alert.html type="warning" title="Note: The versions listed must have the same name as the folder name in which that version of the documentation resides otherwise jekyll it will not find it! The exception is the version 'current' which does not have a separate folder and is used to inform jekyll to utilize the base _docs folder." %}

### Version Keywords
There are six special keywords that can be used in the versions config.
* main
* alpha
* beta
* rc
* pre
* *current*

The value **main**, is used to display the latest development version of the documentation, a banner is used to denote that the code and documentation maybe unstable and that they are not guaranteed to be correct or up to date and could change at any time.

The value of **alpha**, **beta**, **rc** and **pre** are used to denote that the documentation is a pre-production version and as such a banner is displayed announcing that the code/documentation maybe unstable and the content in the pages are still work in progress so may not be completely up to date or correct.

If you wish to utilize this feature then you must create folders within your _docs/*Archive* directory with the names of those you wish to use and place your documentation inside it/them.

The value of **current** is used to align with the latest version of your documentation in your base _docs folder so there **doesn't** need to be a specific folder created and named 'current' to serve them. The name 'current', for the value of 'latest' in the previous example, can be changed to whatever you wish to name the current release but be aware that the version set in the _config.yml file also needs to match it! See the example below where we have called the latest release v3.2 rather than 'current' and we also have a version exactly named v3.2 too, as mentioned this version will point to your base _docs directory. 

```yml
version_params:
  version_menu: "Release"
  version_dir: Archive
  tocversion_dir: versions
  versioning: true
  latest: v3.2
  versions:
    - main
    - v3.2
    - beta
    - v3.1
```

### Configuring Version Alerts

Depending on the version keywords you may use Docsy Jekyll tries to determine if the documentation is historical (e.g. out of date) or is a upcoming release of information and will show one of the following banners to alert users to the fact that they are not reviewing the current version of the documentation. 

|![Historical Versions]({{ site.baseurl }}/assets/img/versionalertoutdated.png)|
|:--:| 
| *This banner is shown for historical versions of your documentation* |

|![Beta Versions]({{ site.baseurl }}/assets/img/versionalertbeta.png)|
|:--:| 
| *This banner is shown for pre-production versions of your documentation* |

|![Development Versions]({{ site.baseurl }}/assets/img/versionalertmain.png)|
|:--:| 
| *This banner is shown for development versions of your documentation* |

These banners can be customised to have the wording or imagery you require by altering the HTML in the _includes/versionalert.html file.

## Table of Contents Handling (TOC)

As with the documents, your TOC contents also need to be updated so they correctly point to the document versions you are viewing.

You will need to update the toc file as the structure of your documentation/toc changes over time but as we have taken a snapshot of our documentation so we need to do the same thing for our toc so it reflects the document structure at that point in time too. You will see that for this site we have the versions of Current and Previous and you will see that the Current version has all the information about versioning which didn't exist in the prior version.

To enable the TOC to change based on the version, we have to create a new toc file and name it {version}-toc.yml and it must be placed in a subdirectory of _data whose name is specified by the tocversion_dir parameter in the _config.yml file (for this site it can be found in the _data/versions subdirectory). We have created previous-toc.yml in the _data/versions directory that has the TOC structure for the prior version where we did not have the versioning.md file present. 


To create this version of the toc file file we can use the following commands
```shell
# Our last release is version "Previous" so we want to create a TOC for that inside our versions directory
mkdir -p _data/versions
# copy the existing TOC file to our version subdirectory and name it as {version}-toc.yml
cp  _data/toc.yml _data/versions/previous-toc.yml
```


{% include alert.html type="info" title="Note: The toc.yml file will always be our current table of contents pointing to the most recent version of the documentation in the base of our _docs folder. When adding additional items to your toc.yml file you do not need to worry about the version identifier as that is taken care of by Docsy Jekyll when viewing alternative versions, continue to have the urls pointing to the files in the base docs directory." %}

Here is what our current toc.yml file in our _data directory looks like, the previous-toc.yml file will look identical apart from omitting the 'Versioning' title and link which was added for this release, and of course will live in the versions subdirectory of _data as well.

```yml
title: Documentation
  url: docs
  links:
    - title: "Getting Started"
      url: "docs/getting-started"
      children:
        - title: Features
          url: "docs/getting-started#getting-started"
        - title: Development
          url: "docs/getting-started#development"
        - title: Customization
          url: "docs/getting-started#customization"
    - title: Versioning
      url: "docs/versioning"
    - title: "About"
      url: "about"
    - title: "News"
      url: "news"
- title: "Extras"
  url: "docs/extras"
  links:
    - title: Quizzes
      url: "docs/extras/example-quiz"
    - title: Tags Page
      url: "tags"
```

Now not every version of your documentation will have a change in structure and therefore require an update to toc.yml. To remove this overhead a mapping file is used to tell Docsy Jekyll which TOC it should use for a particular version,
the benefit of this is that if the structure of your site does not change then you do not need to create an additional toc.yml file.

You will have a toc-mapping.yml file in your _data directory and the contents will contain the code below to map a particular version with a particular TOC file to use. You need to update this file for each version you create even if you do not need to create a new TOC file.

```yml
# This file can be used to explicitly map a release to a specific table-of-contents
# (TOC). You'll want to use this after any revamps to information architecture, to ensure
# that the navigation for older versions still works.

Current: toc
Previous: previous-toc
```
**You do not need to prefix the name of the new TOC filename with the folder (in our case versions) as Docsy Jekyll will retrieve that from the _config.yml file and add that to the path.**  

{% include alert.html type="info" title="Note: If a version cannot be found in this mapping file then the standard toc.yml in the _data directory will be used instead." %}

Because we added the versioning.md markdown file to this site we needed a new toc so that this new content could be accessed from the TOC menu. If we had only made an update to the content of the files that already existed, then we could have pointed Previous to toc in the yml above to use the same toc.yml file.

## Versioning and Search

As you will have seen in the [Versioning Options](#versioning-options) you have the ability to configure Docsy Jekyll to perform it's searches over the entire site's documentation, or only certain versions which you can specify. If you choose not to enable it in _config.yml (allow_search = false) then the searches that get performed will only be over the most current version of the documentation in your base _docs folder. If you prefer to have this enabled then you will need to provide a list of search versions (search_version in _config.yml) that you wish to be displayed if a match is found. The following image shows what your users would be shown if you have this enabled. You can see that the search was for the term 'start' and we have several results returned but two both for the 'Getting Started' topic. The reason for this is due to a result being returned within the current version as well as a result being returned for the previous version as denoted by the badges of 'Current' and 'Previous' below the titles. 


| *Searching with Versioning enabled*|
|:--:|
|![Search with Versions]({{ site.baseurl }}/assets/img/docsy-jekyll-version-search.png)


## Issues with Permalinks

Please do not use permalinks in your archive documentation Front Matter if you wish to use versioning as this will break the versioning system. If you have permalinks in your current documentation you will need to remove them when you place the documents into a subdirectory so that Jekyll can serve them correctly. 

{% include alert.html type="warning" title="Using permalinks in your archive documentation Front Matter will cause issues with versioning as this effectively 'hardcodes' the url of that page and will break the versioning links. Please be aware!" %}

## 404 Errors

There will be times where users will navigate around the documentation and could end up pointing to an invalid page that doesn't exist. For instance while you are reading this page on the **Current** version if you were to change this to the Previous version, via the dropdown, then you will get a page not found as this versioning page did not exist in the prior version. We have created a 404.md page in the base of the site so that the user still gets to navigate even though the page was not found. You can update this page with your own information should you so wish.

{% include alert.html type="info" title="When pages are not found and the 404 page is displayed the TOC menus default back to links pointing to the current release." %}
