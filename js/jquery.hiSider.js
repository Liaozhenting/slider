(function ($) {
    function Slider($container, options) {
        this.$container = $container;
        this.options = $.extend({
            //默认属性
            
        },options);//相同的属性会合并
        this.init();
    };

    $.fn.hiSlider=function(options){
        this.each(function(){
            $(this).data("mr.slider",new Slider($(this),options));
        })
        return this;
    }
})(jQuery);