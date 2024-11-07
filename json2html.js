export default function json2html(data) {
    // Extract all unique keys from the data to ensure all columns are represented
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    // Start building the HTML table string
    let html = `<table data-user="skarthikeya962@gmail.com">\n<thead>\n<tr>`;
    html += headers.map(header => `<th>${header}</th>`).join("");
    html += `</tr>\n</thead>\n<tbody>\n`;

    // Populate rows for each object in the data array
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] || ""}</td>`;
        });
        html += "</tr>\n";
    });

    html += "</tbody>\n</table>";
    return html;
}
