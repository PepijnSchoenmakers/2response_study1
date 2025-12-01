// Local stub for jatos.js to allow running the experiment outside JATOS/Mindprobe
// Provides minimal API used by the experiment: onLoad, submitResultData, endStudyAndRedirect, urlQueryParameters

window.jatos = (function () {
    // Parse query string into an object
    function getUrlParams() {
        var params = {};
        var queryString = window.location.search.substring(1);
        if (!queryString) return params;
        queryString.split('&').forEach(function (pair) {
            var parts = pair.split('=');
            params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
        });
        return params;
    }

    var urlQueryParameters = getUrlParams();

    function onLoad(cb) {
        if (typeof cb === 'function') cb();
    }

    function submitResultData(data) {
        // Log the CSV or data to console and save to localStorage for retrieval
        console.log('jatos.submitResultData called. Data length:', (data && data.length) || 0);
        try {
            // store latest submission in localStorage
            localStorage.setItem('jatos_last_result', data);
        } catch (e) {
            console.warn('Could not save to localStorage', e);
        }
        // Also create a downloadable file link in the page
        try {
            var blob = new Blob([data], { type: 'text/csv' });
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = 'jatos_result.csv';
            link.textContent = 'Download experiment results (click here)';
            link.style.position = 'fixed';
            link.style.right = '10px';
            link.style.top = '10px';
            link.style.zIndex = 10000;
            link.style.background = '#fff';
            link.style.padding = '6px';
            link.style.border = '1px solid #000';
            document.body.appendChild(link);
            console.log('Download link added to page.');
        } catch (e) {
            console.warn('Could not create download link', e);
        }
    }

    function endStudyAndRedirect(url) {
        console.log('jatos.endStudyAndRedirect called. Would redirect to:', url);
        // Show a message and provide a clickable link instead of redirecting
        var container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.left = '50%';
        container.style.top = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.background = '#fff';
        container.style.padding = '20px';
        container.style.border = '2px solid #000';
        container.style.zIndex = 10001;
        container.innerHTML = '<p>Experiment complete. In JATOS this would redirect to:</p><p><a href="' + url + '" target="_blank">' + url + '</a></p>';
        document.body.appendChild(container);
    }

    return {
        onLoad: onLoad,
        submitResultData: submitResultData,
        endStudyAndRedirect: endStudyAndRedirect,
        urlQueryParameters: urlQueryParameters
    };
})();
