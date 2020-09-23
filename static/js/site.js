$(document).ready(function () {
  mermaid.initialize({ startOnLoad: true });

  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".chart").each(function (index) {
    $(this).attr("id", `chart-${index}`);

    var svg = document.querySelector(`#chart-${index}`);
    var { type, ...chartData } = JSON.parse($(this).text());
    new chartXkcd[type](svg, chartData);
  });

  $(".galleria").each(function (index) {
    $(this).attr("id", `galleria-${index}`);

    var { images } = JSON.parse($(this).text());

    for (let image of images) {
      $(this).append(
        `<a href="${image.src}"><img src="${image.src}" data-title="${image.title}" data-description="${image.description}"></a>`
      );
    }

    Galleria.run(`#galleria-${index}`);
  });

  $(".map").each(function (index) {
    $(this).attr("id", `map-${index}`);

    mapboxgl.accessToken = $(this).find(".mapbox-access-token").text().trim();
    var zoom = $(this).find(".mapbox-zoom").text().trim();

    var map = new mapboxgl.Map({
      container: `map-${index}`,
      style: "mapbox://styles/mapbox/light-v10",
      center: [-96, 37.8],
      zoom: zoom,
    });

    map.addControl(new mapboxgl.NavigationControl());

    var geojson = JSON.parse($(this).find(".mapbox-geojson").text().trim());

    const center = [0, 0];

    geojson.features.forEach(function (marker) {
      center[0] += marker.geometry.coordinates[0];
      center[1] += marker.geometry.coordinates[1];

      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              "<h3>" +
                marker.properties.title +
                "</h3><p>" +
                marker.properties.description +
                "</p>"
            )
        )
        .addTo(map);
    });

    center[0] = center[0] / geojson.features.length;
    center[1] = center[1] / geojson.features.length;

    map.setCenter(center);
  });
});
