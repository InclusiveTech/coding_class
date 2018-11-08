var app = angular.module('SlideApp', ['ui.ace', 'LocalStorageModule']);

app.directive('slideImage', function() {
    return function(scope, element, attrs) {
        attrs.$observe('slideImage', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    }
});

app.controller('SlideController', function($scope, $sce, localStorageService) {
    $scope.slideImages = [
        'slides/html-css-curriculum/001.png',
        'slides/html-css-curriculum/002.png',
        'slides/html-css-curriculum/003.png',
        'slides/html-css-curriculum/004.png',
        'slides/html-css-curriculum/005.png',
        'slides/html-css-curriculum/006.png',
        'slides/html-css-curriculum/007.png',
        'slides/html-css-curriculum/008.png',
        'slides/html-css-curriculum/009.png',
        'slides/html-css-curriculum/010.png',
        'slides/html-css-curriculum/011.png',
        'slides/html-css-curriculum/012.png',
        'slides/html-css-curriculum/013.png',
        'slides/html-css-curriculum/014.png',
        'slides/html-css-curriculum/015.png',
        'slides/html-css-curriculum/016.png',
        'slides/html-css-curriculum/017.png',
        'slides/html-css-curriculum/018.png',
        'slides/html-css-curriculum/019.png',
        'slides/html-css-curriculum/020.png',
        'slides/html-css-curriculum/021.png',
        'slides/html-css-curriculum/022.png',
        'slides/html-css-curriculum/023.png',
        'slides/html-css-curriculum/024.png',
        'slides/html-css-curriculum/025.png',
        'slides/html-css-curriculum/026.png',
        'slides/html-css-curriculum/027.png',
        'slides/html-css-curriculum/028.png',
        'slides/html-css-curriculum/029.png',
        'slides/html-css-curriculum/030.png',
        'slides/html-css-curriculum/031.png',
        'slides/html-css-curriculum/032.png',
        'slides/html-css-curriculum/033.png',
        'slides/html-css-curriculum/034.png',
        'slides/html-css-curriculum/035.png',
        'slides/html-css-curriculum/036.png',
        'slides/html-css-curriculum/037.png',
        'slides/html-css-curriculum/038.png',
        'slides/html-css-curriculum/039.png',
        'slides/html-css-curriculum/040.png',
        'slides/html-css-curriculum/041.png',
        'slides/html-css-curriculum/042.png',
        'slides/html-css-curriculum/043.png',
        'slides/html-css-curriculum/044.png',
        'slides/html-css-curriculum/045.png',
        'slides/html-css-curriculum/046.png',
        'slides/html-css-curriculum/047.png',
        'slides/html-css-curriculum/048.png',
        'slides/html-css-curriculum/049.png',
        'slides/html-css-curriculum/050.png',
        'slides/html-css-curriculum/051.png',
        'slides/html-css-curriculum/052.png',
        'slides/html-css-curriculum/053.png',
        'slides/html-css-curriculum/054.png',
        'slides/html-css-curriculum/055.png',
        'slides/html-css-curriculum/056.png',
        'slides/html-css-curriculum/057.png',
        'slides/html-css-curriculum/058.png',
        'slides/html-css-curriculum/059.png',
        'slides/html-css-curriculum/060.png',
        'slides/html-css-curriculum/061.png',
        'slides/html-css-curriculum/062.png',
        'slides/html-css-curriculum/063.png',
        'slides/html-css-curriculum/064.png',
        'slides/html-css-curriculum/065.png',
        'slides/html-css-curriculum/066.png',
        'slides/html-css-curriculum/067.png',
        'slides/html-css-curriculum/068.png',
        'slides/html-css-curriculum/069.png',
        'slides/html-css-curriculum/070.png',
        'slides/html-css-curriculum/071.png',
        'slides/html-css-curriculum/072.png',
        'slides/html-css-curriculum/073.png',
        'slides/html-css-curriculum/074.png',
        'slides/html-css-curriculum/075.png',
        'slides/html-css-curriculum/076.png',
        'slides/html-css-curriculum/077.png',
        'slides/html-css-curriculum/078.png',
        'slides/html-css-curriculum/079.png',
        'slides/html-css-curriculum/080.png',
        'slides/html-css-curriculum/081.png',
        'slides/html-css-curriculum/082.png',
        'slides/html-css-curriculum/083.png',
        'slides/html-css-curriculum/084.png',
        'slides/html-css-curriculum/085.png',
        'slides/html-css-curriculum/086.png',
        'slides/html-css-curriculum/087.png',
        'slides/html-css-curriculum/088.png',
        'slides/html-css-curriculum/089.png',
        'slides/html-css-curriculum/090.png',
        'slides/html-css-curriculum/091.png',
        'slides/html-css-curriculum/092.png',
        'slides/html-css-curriculum/093.png',
        'slides/html-css-curriculum/094.png',
        'slides/html-css-curriculum/095.png',
        'slides/html-css-curriculum/096.png',
        'slides/html-css-curriculum/097.png',
        'slides/html-css-curriculum/098.png',
        'slides/html-css-curriculum/099.png'
        ];
    var html = localStorageService.get('html') || "";
    $scope.data = {htmlString:html, trustedVersion:html}

    var slideNos = localStorageService.get('currentSlideNum') || 0;
    $scope.currentSlideNum = slideNos;
    $scope.$watch('currentSlideNum', function(value){
        localStorageService.add('currentSlideNum', value);
    });




    $scope.nextSlide = function() {
        if($scope.currentSlideNum == $scope.slideImages.length-1) {
            return;
        }
        $scope.currentSlideNum++;
    }

    $scope.prevSlide = function() {
        if($scope.currentSlideNum == 0) {
            return;
        }
        $scope.currentSlideNum--;
    }

    $scope.currentSlide = function() {
        return $scope.slideImages[$scope.currentSlideNum];
    }

    $scope.progress = function() {
        var current = parseInt($scope.currentSlideNum) + 1,
            total = $scope.slideImages.length;
        return current + "/" + total;
    }

    $scope.$watch("data.htmlString", function(newValue) {
        $scope.data.trustedVersion = $sce.trustAsHtml(newValue);
        localStorageService.add('html', newValue);

    }, true);
});
