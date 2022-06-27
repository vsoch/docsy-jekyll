---
layout: null
excluded_in_search: true
---
(function () {
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1),
			vars = query.split("&");

		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");

			if (pair[0] === variable) {
				return decodeURIComponent(pair[1].replace(/\+/g, '%20')).trim();
			}
		}
	}

	function getPreview(query, content, previewLength) {
		previewLength = previewLength || (content.length * 2);

		var parts = query.split(" "),
			match = content.toLowerCase().indexOf(query.toLowerCase()),
			matchLength = query.length,
			preview;

		// Find a relevant location in content
		for (var i = 0; i < parts.length; i++) {
			if (match >= 0) {
				break;
			}

			match = content.toLowerCase().indexOf(parts[i].toLowerCase());
			matchLength = parts[i].length;
		}

		// Create preview
		if (match >= 0) {
			var start = match - (previewLength / 2),
				end = start > 0 ? match + matchLength + (previewLength / 2) : previewLength;

			preview = content.substring(start, end).trim();

			if (start > 0) {
				preview = "..." + preview;
			}

			if (end < content.length) {
				preview = preview + "...";
			}

			// Highlight query parts
			preview = preview.replace(new RegExp("(" + parts.join("|") + ")", "gi"), "<strong>$1</strong>");
		} else {
			// Use start of content if no match found
			preview = content.substring(0, previewLength).trim() + (content.length > previewLength ? "..." : "");
		}

		return preview;
	}

	function displaySearchResults(results, query) {
		var searchResultsEl = document.getElementById("search-results"),
			searchProcessEl = document.getElementById("search-process");

		if (results.length) {
			var resultsHTML = "";
			var searchVersions = [{% for v in site.version_params.search_versions %}"{{ v }}",{% endfor %}"all"]
			results.forEach(function (result) {
			
  				var item = window.data[result.ref]

				// Versioning is disabled
				if (("{{ site.version_params.versioning }}" == "false") && (item.version != "all")) {
				    return
				}

				// Skip result if showing versions disabled
				if (("{{ site.version_params.allow_search }}" == "false") && (item.version != "all")) {
				    return
				}

                               // Skip result if version not in all or versions allowed for search
				if (("{{ site.version_params.versioning }}" == "true") && ("{{ site.version_params.allow_search }}" == "true") && (!searchVersions.includes(item.version))) {
				    return
				}

                                if (item.title) {
					contentPreview = getPreview(query, item.content, 170),
					titlePreview = getPreview(query, item.title);

					// If we only allow one version (all) skip adding a badge
					if (searchVersions.length == 1 ||  "{{ site.version_params.versioning }}" == "false"){
						versionBadge = ""

					// Any older version shows up in gray
					} else if (item.version != "all") {
						versionBadge = "<span class='badge badge-secondary'>" + item.version + "</span>"

					// Current is blue (primary)
					} else {
						versionBadge = "<span class='badge badge-{{ site.tag_color }}'>Current</span>"
                                       }
					resultsHTML += "<li><h4><a href='{{ site.baseurl }}" + item.url.trim() + "'>" + titlePreview + "</a></h4><p>" + versionBadge +"<small>" + contentPreview + "</small></p></li>";
				}
			});

			searchResultsEl.innerHTML = resultsHTML;
			searchProcessEl.innerText = "Showing";
		} else {
			searchResultsEl.style.display = "none";
			searchProcessEl.innerText = "No";
		}
	}

	window.index = lunr(function () {
		this.field("id");
		this.field("title", {boost: 10});
		this.field("categories");
		this.field("url");
		this.field("content");
	});

	var query = decodeURIComponent((getQueryVariable("q") || "").replace(/\+/g, "%20")),
		searchQueryContainerEl = document.getElementById("search-query-container"),
		searchQueryEl = document.getElementById("search-query");

	searchQueryEl.innerText = query;
        if (query != ""){
   		searchQueryContainerEl.style.display = "inline";
        }

	for (var key in window.data) {
		window.index.add(window.data[key]);
	}

	displaySearchResults(window.index.search(query), query); // Hand the results off to be displayed
})();
