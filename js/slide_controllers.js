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
        'slides/001.jpg',
        'slides/002.jpg',
        'slides/003.jpg',
        'slides/004.jpg',
        'slides/005.jpg',
        'slides/006.jpg',
        'slides/007.jpg',
        'slides/008.jpg',
        'slides/009.jpg',
        'slides/010.jpg',
        'slides/011.jpg',
        'slides/012.jpg',
        'slides/013.jpg',
        'slides/014.jpg',
        'slides/015.jpg',
        'slides/016.jpg',
        'slides/017.jpg',
        'slides/018.jpg',
        'slides/019.jpg',
        'slides/020.jpg',
        'slides/021.jpg',
        'slides/022.jpg',
        'slides/023.jpg',
        'slides/024.jpg',
        'slides/025.jpg',
        'slides/026.jpg',
        'slides/027.jpg',
        'slides/028.jpg',
        'slides/029.jpg',
        'slides/030.jpg',
        'slides/031.jpg',
        'slides/032.jpg',
        'slides/033.jpg',
        'slides/034.jpg',
        'slides/035.jpg',
        'slides/036.jpg',
        'slides/037.jpg',
        'slides/038.jpg',
        'slides/039.jpg',
        'slides/040.jpg',
        'slides/041.jpg',
        'slides/042.jpg',
        'slides/043.jpg',
        'slides/044.jpg',
        'slides/045.jpg',
        'slides/046.jpg',
        'slides/047.jpg',
        'slides/048.jpg',
        'slides/049.jpg',
        'slides/050.jpg',
        'slides/051.jpg',
        'slides/052.jpg',
        'slides/053.jpg',
        'slides/054.jpg',
        'slides/055.jpg',
        'slides/056.jpg',
        'slides/057.jpg',
        'slides/058.jpg',
        'slides/059.jpg',
        'slides/060.jpg',
        'slides/061.jpg',
        'slides/062.jpg',
        'slides/063.jpg',
        'slides/064.jpg',
        'slides/065.jpg',
        'slides/066.jpg',
        'slides/067.jpg',
        'slides/068.jpg',
        'slides/069.jpg',
        'slides/070.jpg',
        'slides/071.jpg',
        'slides/072.jpg',
        'slides/073.jpg',
        'slides/074.jpg',
        'slides/075.jpg',
        'slides/076.jpg',
        'slides/077.jpg',
        'slides/078.jpg',
        'slides/079.jpg',
        'slides/080.jpg',
        'slides/081.jpg',
        'slides/082.jpg',
        'slides/083.jpg',
        'slides/084.jpg',
        'slides/085.jpg',
        'slides/086.jpg',
        'slides/087.jpg',
        'slides/088.jpg',
        'slides/089.jpg',
        'slides/090.jpg',
        'slides/091.jpg',
        'slides/092.jpg',
        'slides/093.jpg',
        'slides/094.jpg',
        'slides/095.jpg',
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
