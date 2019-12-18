
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Mjesec', 'BMI', 'BFI', 'Visina', 'Težina' ],
          ['1',  20,  2, 180, 78],
          ['2',  20,  4, 180, 78],
          ['3',  21,  3, 180, 78],
          ['4',  23,  5, 182, 79],
          ['5',  24,  2, 183, 87],
          ['6',  22,  4, 184, 76],
          ['7',  23,  2, 186, 75],

        ]);

        var options = {
          title: 'PRAČENJE TJELESNIH SPECIFIKACIJA',
          curveType: 'function',
          legend: { position: 'bottom' }
          
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
    </script>
  <template>
  <div>
  <div id="graf" class="col-6">
      <div id="curve_chart" style="width: 800px; height: 500px"></div>
      </div>
  </div>
       </template>


<style>
  #graf {
      align-self: center;
      text-align: center;
      margin-left: 270px;
  }
</style>

  