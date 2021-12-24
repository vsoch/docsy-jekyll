# Docsy Jekyll Theme


[![CircleCI](https://circleci.com/gh/vsoch/docsy-jekyll/tree/master.svg?style=svg)](https://circleci.com/gh/vsoch/docsy-jekyll/tree/master)
<a href="https://jekyll-themes.com/docsy-jekyll/">
    <img src="https://img.shields.io/badge/featured%20on-JT-red.svg" height="20" alt="Jekyll Themes Shield" >
</a>

![https://raw.githubusercontent.com/vsoch/docsy-jekyll/master/assets/img/docsy-jekyll.png](https://raw.githubusercontent.com/vsoch/docsy-jekyll/master/assets/img/docsy-jekyll.png)


## Description

This is a [starter template](https://vsoch.github.com/docsy-jekyll/) for a Docsy jekyll theme, based
on the beautiful [Docsy](https://github.com/google/docsy) that renders with Hugo. This version is intended for
native deployment on GitHub pages. The original [Apache License](https://github.com/vsoch/docsy-jekyll/blob/master/LICENSE) is included.

1. Render your documentation
2. Display your News (aka Posts)
3. Run on [GitHub Pages](https://guides.github.com/features/pages/)
4. Allow users to contribute easily to your work or documentation
5. Produce quizzes


## Prerequisites  


Before you start, you should have installed:  
1. Ruby: [how to install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
2. Jekyll: [how to install Jekyll](https://jekyllrb.com/docs/installation/)
3. Bundler: [how to install Bundler](https://bundler.io/)
4. Git: [how to install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
5. You will need a GitHub account. We assume you have one.

**NOTE**: The `how to install...` links above should describe installation on three platforms, MacOS, Linux, and Windows.


## Installation


NOTE: Specific instructions for only MacOS and Ubuntu are described below.

**OSX**, you will also need to setup [Brew](https://brew.sh/), which is a package manager for OSX. To install Brew and Git, run the following commands:

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


## Usage


### 1. Getting the Docsy Jekyll theme code


You can clone the repository right to where you want to host the docs:

```bash
git clone https://github.com/vsoch/docsy-jekyll.git docs
cd docs
```

### 2. Customize

To edit configuration values, customize the [_config.yml](https://github.com/vsoch/docsy-jekyll/blob/master/_config.yml).
To add pages, write them into the [pages](https://github.com/vsoch/docsy-jekyll/blob/master/pages) folder. 
You define urls based on the `permalink` attribute in your pages,
and then add them to the navigation by adding to the content of [_data/toc.myl](https://github.com/vsoch/docsy-jekyll/blob/master/_data/toc.yml).
The top navigation is controlled by [_data/navigation.yml](https://github.com/vsoch/docsy-jekyll/blob/master/_data/navigation.yml)

### 3. Options

Most of the configuration values in the [_config.yml](https://github.com/vsoch/docsy-jekyll/blob/master/_config.yml) are self explanatory,
and for more details, see the [getting started page](https://vsoch.github.io/docsy-jekyll/docs/getting-started)
rendered on the site.

### 4. Serve

Depending on how you installed jekyll:

```bash
jekyll serve
# or
bundle exec jekyll serve
```

**NOTE:** If the above serve command throws an error saying `require': cannot load such file -- webrick (LoadError)` try to run `bundle add webrick` to automatically add the webrick gem to your Gemfile, or manually add `gem "webrick"` line to the Gemfile and then run the serve command again.


### 5. Run as a container in dev or prod

#### Software Dependencies

If you want to run docsy jekyll via a container for development (dev) or production (prod) you can use containers. This approach requires installing [docker-ce](https://docs.docker.com/engine/install/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/). 

#### Customization

Note that the [docker-compose.yml](docker-compose.yml) file is using the [jekyll/jekyll:3.8](https://hub.docker.com/r/jekyll/jekyll/tags) image. If you want to make your build more reproducible, you can specify a particular version for jekyll (tag). Note that at the development time of writing this documentation, the latest was tag 4.0.0,
and it [had a bug](https://github.com/fastai/fastpages/issues/267#issuecomment-620612896) that prevented the server from deploying.

If you are deploying a container to production, you should remove the line to
mount the bundles directory to the host in the docker-compose.yml. Change:

```yaml
    volumes: 
      - "./:/srv/jekyll"
      - "./vendor/bundle:/usr/local/bundle"
      # remove "./vendor/bundle:/usr/local/bundle" volume when deploying in production
```

to:

```yaml
    volumes: 
      - "./:/srv/jekyll"
```

This additional volume is optimal for development so you can cache the bundle dependencies,
but should be removed for production. 

#### Start Container

Once your docker-compose to download the base container and bring up the server:

```bash
docker-compose up -d
```

You can then open your browser to [http://localhost:4000](http://localhost:4000)
to see the server running.

> Node : changes `baseurl: ""` in _config.yml  when you are running in local and prod according to the requirement.

## Changes

The site is intended for purely documentation, so while the front page banner
is useful for business or similar, this author (@vsoch) preferred to have
the main site page go directly to the Documentation view. Posts
are still provided via a feed.
