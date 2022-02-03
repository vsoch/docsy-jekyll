# Docsy Jekyll Theme


[![CircleCI](https://circleci.com/gh/vsoch/docsy-jekyll/tree/master.svg?style=svg)](https://circleci.com/gh/vsoch/docsy-jekyll/tree/master)
<a href="https://jekyll-themes.com/docsy-jekyll/">
    <img src="https://img.shields.io/badge/featured%20on-JT-red.svg" height="20" alt="Jekyll Themes Shield" >
</a>

## 1. Description

- This is a [starter template](https://vsoch.github.com/docsy-jekyll/) for a Docsy-like jekyll theme, based on Google's [Docsy](https://github.com/google/docsy) that renders with Hugo. The original [Apache License can be found here.](https://github.com/vsoch/docsy-jekyll/blob/master/LICENSE)

- This version is intended for GitHub pages deployment that uses Jekyll. 

This version allows one to:
1. Render your documentation
2. Display your News (aka Posts)
3. Run on [GitHub Pages](https://guides.github.com/features/pages/)
4. Allow users to contribute more easily to your work/documentation
5. Produce quizzes
6. Display code snippets


## 2. Prerequisites  

- Before you start, you should have installed:  
- 
1. Git: [how to install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Ruby: [how to install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
3. Jekyll: [how to install Jekyll](https://jekyllrb.com/docs/installation/)
4. Bundler: [how to install Bundler](https://bundler.io/)
5. You will need a GitHub account, which we assume you have.

**NOTE**: The `How to install...` links above describe installation on three platforms, MacOS, Linux, and Windows.


## 3. Installation

### 3.1 Windows

### 3.2 Ubuntu

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install git
```

Followed by
```bash
brew install ruby
gem install jekyll
gem install bundler
bundle install
```

```bash
# Ruby
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL
rbenv install 2.3.1
rbenv global 2.3.1
gem install bundler
rbenv rehash
ruby -v

# Rails
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
gem install rails -v 4.2.6
rbenv rehash

# Jekyll
gem install jekyll
gem install github-pages
gem install jekyll-sass-converter

rbenv rehash
```

A simple installion from the **Ubuntu** repositories works as well.

```bash
sudo apt install ruby
sudo apt install jekyll
sudo apt install bundler
```


## 4. Getting the Docsy Jekyll theme code

- There are several ways to get started with the Docsy-Jekyll software:

### 4.1 Download .zip file from GitHub

Go to the GitHub repository and download the .zip file containing the code.

### 4.2 Obtain URL address for GitHub repo

```bash
git clone https://github.com/vsoch/docsy-jekyll.git folder_name
cd folder_name
```

### 5. Customization of code for personal use:

To edit configuration values, customize the [_config.yml](https://github.com/vsoch/docsy-jekyll/blob/master/_config.yml).
To add pages, write them into the [pages](https://github.com/vsoch/docsy-jekyll/blob/master/pages) folder. 
You define urls based on the `permalink` attribute in your pages,
and then add them to the navigation by adding to the content of [_data/toc.myl](https://github.com/vsoch/docsy-jekyll/blob/master/_data/toc.yml).
The top navigation is controlled by [_data/navigation.yml](https://github.com/vsoch/docsy-jekyll/blob/master/_data/navigation.yml)

5.1 Options

Most of the configuration values in the [_config.yml](https://github.com/vsoch/docsy-jekyll/blob/master/_config.yml) are self explanatory,
and for more details, see the [getting started page](https://vsoch.github.io/docsy-jekyll/docs/getting-started)
rendered on the site.

5.2 Serve

Depending on how you installed jekyll:

```bash
jekyll serve
# or
bundle exec jekyll serve
```



