/**
 * skylark-bootstrap-datatimepicker - A version of bootstrap datatimepicker that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-bootstrap-datatimepicker/
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-jquery","skylark-moment"],function(e,t,a){var n=function(e,n){var r,i,o,s,d,l,p,c,u,f={},h=!0,m=!1,y=!1,g=0,b=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],w=["days","months","years","decades"],v=["top","bottom","auto"],k=["left","right","auto"],D=["default","top","bottom"],C={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},x={},T=function(){return void 0!==a.tz&&void 0!==n.timeZone&&null!==n.timeZone&&""!==n.timeZone},M=function(e){var t;return t=void 0===e||null===e?a():a.isDate(e)||a.isMoment(e)?a(e):T()?a.tz(e,l,n.useStrict,n.timeZone):a(e,l,n.useStrict),T()&&t.tz(n.timeZone),t},S=function(e){if("string"!=typeof e||e.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(e){case"y":return-1!==d.indexOf("Y");case"M":return-1!==d.indexOf("M");case"d":return-1!==d.toLowerCase().indexOf("d");case"h":case"H":return-1!==d.toLowerCase().indexOf("h");case"m":return-1!==d.indexOf("m");case"s":return-1!==d.indexOf("s");default:return!1}},O=function(){return S("h")||S("m")||S("s")},P=function(){return S("y")||S("M")||S("d")},E=function(){var e,a,r,i=t("<div>").addClass("timepicker-hours").append(t("<table>").addClass("table-condensed")),o=t("<div>").addClass("timepicker-minutes").append(t("<table>").addClass("table-condensed")),d=t("<div>").addClass("timepicker-seconds").append(t("<table>").addClass("table-condensed")),l=[(e=t("<tr>"),a=t("<tr>"),r=t("<tr>"),S("h")&&(e.append(t("<td>").append(t("<a>").attr({href:"#",tabindex:"-1",title:n.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(t("<span>").addClass(n.icons.up)))),a.append(t("<td>").append(t("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:n.tooltips.pickHour}).attr("data-action","showHours"))),r.append(t("<td>").append(t("<a>").attr({href:"#",tabindex:"-1",title:n.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(t("<span>").addClass(n.icons.down))))),S("m")&&(S("h")&&(e.append(t("<td>").addClass("separator")),a.append(t("<td>").addClass("separator").html(":")),r.append(t("<td>").addClass("separator"))),e.append(t("<td>").append(t("<a>").attr({href:"#",tabindex:"-1",title:n.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(t("<span>").addClass(n.icons.up)))),a.append(t("<td>").append(t("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:n.tooltips.pickMinute}).attr("data-action","showMinutes"))),r.append(t("<td>").append(t("<a>").attr({href:"#",tabindex:"-1",title:n.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(t("<span>").addClass(n.icons.down))))),S("s")&&(S("m")&&(e.append(t("<td>").addClass("separator")),a.append(t("<td>").addClass("separator").html(":")),r.append(t("<td>").addClass("separator"))),e.append(t("<td>").append(t("<a>").attr({href:"#",tabindex:"-1",title:n.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(t("<span>").addClass(n.icons.up)))),a.append(t("<td>").append(t("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:n.tooltips.pickSecond}).attr("data-action","showSeconds"))),r.append(t("<td>").append(t("<a>").attr({href:"#",tabindex:"-1",title:n.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(t("<span>").addClass(n.icons.down))))),s||(e.append(t("<td>").addClass("separator")),a.append(t("<td>").append(t("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:n.tooltips.togglePeriod}))),r.append(t("<td>").addClass("separator"))),t("<div>").addClass("timepicker-picker").append(t("<table>").addClass("table-condensed").append([e,a,r])))];return S("h")&&l.push(i),S("m")&&l.push(o),S("s")&&l.push(d),l},H=function(){var e,a,r,i=t("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),o=t("<div>").addClass("datepicker").append((a=t("<thead>").append(t("<tr>").append(t("<th>").addClass("prev").attr("data-action","previous").append(t("<span>").addClass(n.icons.previous))).append(t("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",n.calendarWeeks?"6":"5")).append(t("<th>").addClass("next").attr("data-action","next").append(t("<span>").addClass(n.icons.next)))),r=t("<tbody>").append(t("<tr>").append(t("<td>").attr("colspan",n.calendarWeeks?"8":"7"))),[t("<div>").addClass("datepicker-days").append(t("<table>").addClass("table-condensed").append(a).append(t("<tbody>"))),t("<div>").addClass("datepicker-months").append(t("<table>").addClass("table-condensed").append(a.clone()).append(r.clone())),t("<div>").addClass("datepicker-years").append(t("<table>").addClass("table-condensed").append(a.clone()).append(r.clone())),t("<div>").addClass("datepicker-decades").append(t("<table>").addClass("table-condensed").append(a.clone()).append(r.clone()))])),d=t("<div>").addClass("timepicker").append(E()),l=t("<ul>").addClass("list-unstyled"),p=t("<li>").addClass("picker-switch"+(n.collapse?" accordion-toggle":"")).append((e=[],n.showTodayButton&&e.push(t("<td>").append(t("<a>").attr({"data-action":"today",title:n.tooltips.today}).append(t("<span>").addClass(n.icons.today)))),!n.sideBySide&&P()&&O()&&e.push(t("<td>").append(t("<a>").attr({"data-action":"togglePicker",title:n.tooltips.selectTime}).append(t("<span>").addClass(n.icons.time)))),n.showClear&&e.push(t("<td>").append(t("<a>").attr({"data-action":"clear",title:n.tooltips.clear}).append(t("<span>").addClass(n.icons.clear)))),n.showClose&&e.push(t("<td>").append(t("<a>").attr({"data-action":"close",title:n.tooltips.close}).append(t("<span>").addClass(n.icons.close)))),t("<table>").addClass("table-condensed").append(t("<tbody>").append(t("<tr>").append(e)))));return n.inline&&i.removeClass("dropdown-menu"),s&&i.addClass("usetwentyfour"),S("s")&&!s&&i.addClass("wider"),n.sideBySide&&P()&&O()?(i.addClass("timepicker-sbs"),"top"===n.toolbarPlacement&&i.append(p),i.append(t("<div>").addClass("row").append(o.addClass("col-md-6")).append(d.addClass("col-md-6"))),"bottom"===n.toolbarPlacement&&i.append(p),i):("top"===n.toolbarPlacement&&l.append(p),P()&&l.append(t("<li>").addClass(n.collapse&&O()?"collapse in":"").append(o)),"default"===n.toolbarPlacement&&l.append(p),O()&&l.append(t("<li>").addClass(n.collapse&&P()?"collapse":"").append(d)),"bottom"===n.toolbarPlacement&&l.append(p),i.append(l))},I=function(){var a,r=(m||e).position(),i=(m||e).offset(),o=n.widgetPositioning.vertical,s=n.widgetPositioning.horizontal;if(n.widgetParent)a=n.widgetParent.append(y);else if(e.is("input"))a=e.after(y).parent();else{if(n.inline)return void(a=e.append(y));a=e,e.children().first().after(y)}if("auto"===o&&(o=i.top+1.5*y.height()>=t(window).height()+t(window).scrollTop()&&y.height()+e.outerHeight()<i.top?"top":"bottom"),"auto"===s&&(s=a.width()<i.left+y.outerWidth()/2&&i.left+y.outerWidth()>t(window).width()?"right":"left"),"top"===o?y.addClass("top").removeClass("bottom"):y.addClass("bottom").removeClass("top"),"right"===s?y.addClass("pull-right"):y.removeClass("pull-right"),"static"===a.css("position")&&(a=a.parents().filter(function(){return"static"!==t(this).css("position")}).first()),0===a.length)throw new Error("datetimepicker component should be placed within a non-static positioned container");y.css({top:"top"===o?"auto":r.top+e.outerHeight(),bottom:"top"===o?a.outerHeight()-(a===e?0:r.top):"auto",left:"left"===s?a===e?0:r.left:"auto",right:"left"===s?"auto":a.outerWidth()-e.outerWidth()-(a===e?0:r.left)})},Y=function(t){"dp.change"===t.type&&(t.date&&t.date.isSame(t.oldDate)||!t.date&&!t.oldDate)||e.trigger(t)},B=function(e){"y"===e&&(e="YYYY"),Y({type:"dp.update",change:e,viewDate:i.clone()})},q=function(e){y&&(e&&(p=Math.max(g,Math.min(3,p+e))),y.find(".datepicker > div").hide().filter(".datepicker-"+b[p].clsName).show())},A=function(e,a){if(!e.isValid())return!1;if(n.disabledDates&&"d"===a&&(r=e,!0===n.disabledDates[r.format("YYYY-MM-DD")]))return!1;var r;if(n.enabledDates&&"d"===a&&!function(e){return!0===n.enabledDates[e.format("YYYY-MM-DD")]}(e))return!1;if(n.minDate&&e.isBefore(n.minDate,a))return!1;if(n.maxDate&&e.isAfter(n.maxDate,a))return!1;if(n.daysOfWeekDisabled&&"d"===a&&-1!==n.daysOfWeekDisabled.indexOf(e.day()))return!1;if(n.disabledHours&&("h"===a||"m"===a||"s"===a)&&function(e){return!0===n.disabledHours[e.format("H")]}(e))return!1;if(n.enabledHours&&("h"===a||"m"===a||"s"===a)&&!function(e){return!0===n.enabledHours[e.format("H")]}(e))return!1;if(n.disabledTimeIntervals&&("h"===a||"m"===a||"s"===a)){var i=!1;if(t.each(n.disabledTimeIntervals,function(){if(e.isBetween(this[0],this[1]))return i=!0,!1}),i)return!1}return!0},j=function(){var e,o,s,d=y.find(".datepicker-days"),l=d.find("th"),p=[],c=[];if(P()){for(l.eq(0).find("span").attr("title",n.tooltips.prevMonth),l.eq(1).attr("title",n.tooltips.selectMonth),l.eq(2).find("span").attr("title",n.tooltips.nextMonth),d.find(".disabled").removeClass("disabled"),l.eq(1).text(i.format(n.dayViewHeaderFormat)),A(i.clone().subtract(1,"M"),"M")||l.eq(0).addClass("disabled"),A(i.clone().add(1,"M"),"M")||l.eq(2).addClass("disabled"),e=i.clone().startOf("M").startOf("w").startOf("d"),s=0;s<42;s++)0===e.weekday()&&(o=t("<tr>"),n.calendarWeeks&&o.append('<td class="cw">'+e.week()+"</td>"),p.push(o)),c=["day"],e.isBefore(i,"M")&&c.push("old"),e.isAfter(i,"M")&&c.push("new"),e.isSame(r,"d")&&!h&&c.push("active"),A(e,"d")||c.push("disabled"),e.isSame(M(),"d")&&c.push("today"),0!==e.day()&&6!==e.day()||c.push("weekend"),Y({type:"dp.classify",date:e,classNames:c}),o.append('<td data-action="selectDay" data-day="'+e.format("L")+'" class="'+c.join(" ")+'">'+e.date()+"</td>"),e.add(1,"d");var u,f,m;d.find("tbody").empty().append(p),u=y.find(".datepicker-months"),f=u.find("th"),m=u.find("tbody").find("span"),f.eq(0).find("span").attr("title",n.tooltips.prevYear),f.eq(1).attr("title",n.tooltips.selectYear),f.eq(2).find("span").attr("title",n.tooltips.nextYear),u.find(".disabled").removeClass("disabled"),A(i.clone().subtract(1,"y"),"y")||f.eq(0).addClass("disabled"),f.eq(1).text(i.year()),A(i.clone().add(1,"y"),"y")||f.eq(2).addClass("disabled"),m.removeClass("active"),r.isSame(i,"y")&&!h&&m.eq(r.month()).addClass("active"),m.each(function(e){A(i.clone().month(e),"M")||t(this).addClass("disabled")}),function(){var e=y.find(".datepicker-years"),t=e.find("th"),a=i.clone().subtract(5,"y"),o=i.clone().add(6,"y"),s="";for(t.eq(0).find("span").attr("title",n.tooltips.prevDecade),t.eq(1).attr("title",n.tooltips.selectDecade),t.eq(2).find("span").attr("title",n.tooltips.nextDecade),e.find(".disabled").removeClass("disabled"),n.minDate&&n.minDate.isAfter(a,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(a.year()+"-"+o.year()),n.maxDate&&n.maxDate.isBefore(o,"y")&&t.eq(2).addClass("disabled");!a.isAfter(o,"y");)s+='<span data-action="selectYear" class="year'+(a.isSame(r,"y")&&!h?" active":"")+(A(a,"y")?"":" disabled")+'">'+a.year()+"</span>",a.add(1,"y");e.find("td").html(s)}(),function(){var e,t=y.find(".datepicker-decades"),o=t.find("th"),s=a({y:i.year()-i.year()%100-1}),d=s.clone().add(100,"y"),l=s.clone(),p=!1,c=!1,u="";for(o.eq(0).find("span").attr("title",n.tooltips.prevCentury),o.eq(2).find("span").attr("title",n.tooltips.nextCentury),t.find(".disabled").removeClass("disabled"),(s.isSame(a({y:1900}))||n.minDate&&n.minDate.isAfter(s,"y"))&&o.eq(0).addClass("disabled"),o.eq(1).text(s.year()+"-"+d.year()),(s.isSame(a({y:2e3}))||n.maxDate&&n.maxDate.isBefore(d,"y"))&&o.eq(2).addClass("disabled");!s.isAfter(d,"y");)e=s.year()+12,p=n.minDate&&n.minDate.isAfter(s,"y")&&n.minDate.year()<=e,c=n.maxDate&&n.maxDate.isAfter(s,"y")&&n.maxDate.year()<=e,u+='<span data-action="selectDecade" class="decade'+(r.isAfter(s)&&r.year()<=e?" active":"")+(A(s,"y")||p||c?"":" disabled")+'" data-selection="'+(s.year()+6)+'">'+(s.year()+1)+" - "+(s.year()+12)+"</span>",s.add(12,"y");u+="<span></span><span></span><span></span>",t.find("td").html(u),o.eq(1).text(l.year()+1+"-"+s.year())}()}},F=function(){var e,a,o=y.find(".timepicker span[data-time-component]");s||(e=y.find(".timepicker [data-action=togglePeriod]"),a=r.clone().add(r.hours()>=12?-12:12,"h"),e.text(r.format("A")),A(a,"h")?e.removeClass("disabled"):e.addClass("disabled")),o.filter("[data-time-component=hours]").text(r.format(s?"HH":"hh")),o.filter("[data-time-component=minutes]").text(r.format("mm")),o.filter("[data-time-component=seconds]").text(r.format("ss")),function(){var e=y.find(".timepicker-hours table"),a=i.clone().startOf("d"),n=[],r=t("<tr>");for(i.hour()>11&&!s&&a.hour(12);a.isSame(i,"d")&&(s||i.hour()<12&&a.hour()<12||i.hour()>11);)a.hour()%4==0&&(r=t("<tr>"),n.push(r)),r.append('<td data-action="selectHour" class="hour'+(A(a,"h")?"":" disabled")+'">'+a.format(s?"HH":"hh")+"</td>"),a.add(1,"h");e.empty().append(n)}(),function(){for(var e=y.find(".timepicker-minutes table"),a=i.clone().startOf("h"),r=[],o=t("<tr>"),s=1===n.stepping?5:n.stepping;i.isSame(a,"h");)a.minute()%(4*s)==0&&(o=t("<tr>"),r.push(o)),o.append('<td data-action="selectMinute" class="minute'+(A(a,"m")?"":" disabled")+'">'+a.format("mm")+"</td>"),a.add(s,"m");e.empty().append(r)}(),function(){for(var e=y.find(".timepicker-seconds table"),a=i.clone().startOf("m"),n=[],r=t("<tr>");i.isSame(a,"m");)a.second()%20==0&&(r=t("<tr>"),n.push(r)),r.append('<td data-action="selectSecond" class="second'+(A(a,"s")?"":" disabled")+'">'+a.format("ss")+"</td>"),a.add(5,"s");e.empty().append(n)}()},L=function(){y&&(j(),F())},W=function(t){var a=h?null:r;if(!t)return h=!0,o.val(""),e.data("date",""),Y({type:"dp.change",date:!1,oldDate:a}),void L();if(t=t.clone().locale(n.locale),T()&&t.tz(n.timeZone),1!==n.stepping)for(t.minutes(Math.round(t.minutes()/n.stepping)*n.stepping).seconds(0);n.minDate&&t.isBefore(n.minDate);)t.add(n.stepping,"minutes");A(t)?(i=(r=t).clone(),o.val(r.format(d)),e.data("date",r.format(d)),h=!1,L(),Y({type:"dp.change",date:r.clone(),oldDate:a})):(n.keepInvalid?Y({type:"dp.change",date:t,oldDate:a}):o.val(h?"":r.format(d)),Y({type:"dp.error",date:t,oldDate:a}))},z=function(){var e=!1;return y?(y.find(".collapse").each(function(){var a=t(this).data("collapse");return!a||!a.transitioning||(e=!0,!1)}),e?f:(m&&m.hasClass("btn")&&m.toggleClass("active"),y.hide(),t(window).off("resize",I),y.off("click","[data-action]"),y.off("mousedown",!1),y.remove(),y=!1,Y({type:"dp.hide",date:r.clone()}),o.blur(),p=0,i=r.clone(),f)):f},N=function(){W(null)},V=function(e){return void 0===n.parseInputDate?(!a.isMoment(e)||e instanceof Date)&&(e=M(e)):e=n.parseInputDate(e),e},Z={next:function(){var e=b[p].navFnc;i.add(b[p].navStep,e),j(),B(e)},previous:function(){var e=b[p].navFnc;i.subtract(b[p].navStep,e),j(),B(e)},pickerSwitch:function(){q(1)},selectMonth:function(e){var a=t(e.target).closest("tbody").find("span").index(t(e.target));i.month(a),p===g?(W(r.clone().year(i.year()).month(i.month())),n.inline||z()):(q(-1),j()),B("M")},selectYear:function(e){var a=parseInt(t(e.target).text(),10)||0;i.year(a),p===g?(W(r.clone().year(i.year())),n.inline||z()):(q(-1),j()),B("YYYY")},selectDecade:function(e){var a=parseInt(t(e.target).data("selection"),10)||0;i.year(a),p===g?(W(r.clone().year(i.year())),n.inline||z()):(q(-1),j()),B("YYYY")},selectDay:function(e){var a=i.clone();t(e.target).is(".old")&&a.subtract(1,"M"),t(e.target).is(".new")&&a.add(1,"M"),W(a.date(parseInt(t(e.target).text(),10))),O()||n.keepOpen||n.inline||z()},incrementHours:function(){var e=r.clone().add(1,"h");A(e,"h")&&W(e)},incrementMinutes:function(){var e=r.clone().add(n.stepping,"m");A(e,"m")&&W(e)},incrementSeconds:function(){var e=r.clone().add(1,"s");A(e,"s")&&W(e)},decrementHours:function(){var e=r.clone().subtract(1,"h");A(e,"h")&&W(e)},decrementMinutes:function(){var e=r.clone().subtract(n.stepping,"m");A(e,"m")&&W(e)},decrementSeconds:function(){var e=r.clone().subtract(1,"s");A(e,"s")&&W(e)},togglePeriod:function(){W(r.clone().add(r.hours()>=12?-12:12,"h"))},togglePicker:function(e){var a,r=t(e.target),i=r.closest("ul"),o=i.find(".in"),s=i.find(".collapse:not(.in)");if(o&&o.length){if((a=o.data("collapse"))&&a.transitioning)return;o.collapse?(o.collapse("hide"),s.collapse("show")):(o.removeClass("in"),s.addClass("in")),r.is("span")?r.toggleClass(n.icons.time+" "+n.icons.date):r.find("span").toggleClass(n.icons.time+" "+n.icons.date)}},showPicker:function(){y.find(".timepicker > div:not(.timepicker-picker)").hide(),y.find(".timepicker .timepicker-picker").show()},showHours:function(){y.find(".timepicker .timepicker-picker").hide(),y.find(".timepicker .timepicker-hours").show()},showMinutes:function(){y.find(".timepicker .timepicker-picker").hide(),y.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){y.find(".timepicker .timepicker-picker").hide(),y.find(".timepicker .timepicker-seconds").show()},selectHour:function(e){var a=parseInt(t(e.target).text(),10);s||(r.hours()>=12?12!==a&&(a+=12):12===a&&(a=0)),W(r.clone().hours(a)),Z.showPicker.call(f)},selectMinute:function(e){W(r.clone().minutes(parseInt(t(e.target).text(),10))),Z.showPicker.call(f)},selectSecond:function(e){W(r.clone().seconds(parseInt(t(e.target).text(),10))),Z.showPicker.call(f)},clear:N,today:function(){var e=M();A(e,"d")&&W(e)},close:z},R=function(e){return!t(e.currentTarget).is(".disabled")&&(Z[t(e.currentTarget).data("action")].apply(f,arguments),!1)},U=function(){var e;return o.prop("disabled")||!n.ignoreReadonly&&o.prop("readonly")||y?f:(void 0!==o.val()&&0!==o.val().trim().length?W(V(o.val().trim())):h&&n.useCurrent&&(n.inline||o.is("input")&&0===o.val().trim().length)&&(e=M(),"string"==typeof n.useCurrent&&(e={year:function(e){return e.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(e){return e.date(1).hours(0).seconds(0).minutes(0)},day:function(e){return e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}}[n.useCurrent](e)),W(e)),y=H(),function(){var e=t("<tr>"),a=i.clone().startOf("w").startOf("d");for(!0===n.calendarWeeks&&e.append(t("<th>").addClass("cw").text("#"));a.isBefore(i.clone().endOf("w"));)e.append(t("<th>").addClass("dow").text(a.format("dd"))),a.add(1,"d");y.find(".datepicker-days thead").append(e)}(),function(){for(var e=[],a=i.clone().startOf("y").startOf("d");a.isSame(i,"y");)e.push(t("<span>").attr("data-action","selectMonth").addClass("month").text(a.format("MMM"))),a.add(1,"M");y.find(".datepicker-months td").empty().append(e)}(),y.find(".timepicker-hours").hide(),y.find(".timepicker-minutes").hide(),y.find(".timepicker-seconds").hide(),L(),q(),t(window).on("resize",I),y.on("click","[data-action]",R),y.on("mousedown",!1),m&&m.hasClass("btn")&&m.toggleClass("active"),I(),y.show(),n.focusOnShow&&!o.is(":focus")&&o.focus(),Y({type:"dp.show"}),f)},G=function(){return y?z():U()},Q=function(e){var t,a,r,i,o=null,s=[],d={},l=e.which;for(t in x[l]="p",x)x.hasOwnProperty(t)&&"p"===x[t]&&(s.push(t),parseInt(t,10)!==l&&(d[t]=!0));for(t in n.keyBinds)if(n.keyBinds.hasOwnProperty(t)&&"function"==typeof n.keyBinds[t]&&(r=t.split(" ")).length===s.length&&C[l]===r[r.length-1]){for(i=!0,a=r.length-2;a>=0;a--)if(!(C[r[a]]in d)){i=!1;break}if(i){o=n.keyBinds[t];break}}o&&(o.call(f,y),e.stopPropagation(),e.preventDefault())},J=function(e){x[e.which]="r",e.stopPropagation(),e.preventDefault()},K=function(e){var a=t(e.target).val().trim(),n=a?V(a):null;return W(n),e.stopImmediatePropagation(),!1},X=function(e){var a={};return t.each(e,function(){var e=V(this);e.isValid()&&(a[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(a).length&&a},$=function(e){var a={};return t.each(e,function(){a[this]=!0}),!!Object.keys(a).length&&a},_=function(){var e=n.format||"L LT";d=e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return(r.localeData().longDateFormat(e)||e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return r.localeData().longDateFormat(e)||e})}),(l=n.extraFormats?n.extraFormats.slice():[]).indexOf(e)<0&&l.indexOf(d)<0&&l.push(d),s=d.toLowerCase().indexOf("a")<1&&d.replace(/\[.*?\]/g,"").indexOf("h")<1,S("y")&&(g=2),S("M")&&(g=1),S("d")&&(g=0),p=Math.max(g,p),h||W(r)};if(f.destroy=function(){z(),o.off({change:K,blur:blur,keydown:Q,keyup:J,focus:n.allowInputToggle?z:""}),e.is("input")?o.off({focus:U}):m&&(m.off("click",G),m.off("mousedown",!1)),e.removeData("DateTimePicker"),e.removeData("date")},f.toggle=G,f.show=U,f.hide=z,f.disable=function(){return z(),m&&m.hasClass("btn")&&m.addClass("disabled"),o.prop("disabled",!0),f},f.enable=function(){return m&&m.hasClass("btn")&&m.removeClass("disabled"),o.prop("disabled",!1),f},f.ignoreReadonly=function(e){if(0===arguments.length)return n.ignoreReadonly;if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");return n.ignoreReadonly=e,f},f.options=function(e){if(0===arguments.length)return t.extend(!0,{},n);if(!(e instanceof Object))throw new TypeError("options() options parameter should be an object");return t.extend(!0,n,e),t.each(n,function(e,t){if(void 0===f[e])throw new TypeError("option "+e+" is not recognized!");f[e](t)}),f},f.date=function(e){if(0===arguments.length)return h?null:r.clone();if(!(null===e||"string"==typeof e||a.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return W(null===e?null:V(e)),f},f.format=function(e){if(0===arguments.length)return n.format;if("string"!=typeof e&&("boolean"!=typeof e||!1!==e))throw new TypeError("format() expects a string or boolean:false parameter "+e);return n.format=e,d&&_(),f},f.timeZone=function(e){if(0===arguments.length)return n.timeZone;if("string"!=typeof e)throw new TypeError("newZone() expects a string parameter");return n.timeZone=e,f},f.dayViewHeaderFormat=function(e){if(0===arguments.length)return n.dayViewHeaderFormat;if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return n.dayViewHeaderFormat=e,f},f.extraFormats=function(e){if(0===arguments.length)return n.extraFormats;if(!1!==e&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return n.extraFormats=e,l&&_(),f},f.disabledDates=function(e){if(0===arguments.length)return n.disabledDates?t.extend({},n.disabledDates):n.disabledDates;if(!e)return n.disabledDates=!1,L(),f;if(!(e instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return n.disabledDates=X(e),n.enabledDates=!1,L(),f},f.enabledDates=function(e){if(0===arguments.length)return n.enabledDates?t.extend({},n.enabledDates):n.enabledDates;if(!e)return n.enabledDates=!1,L(),f;if(!(e instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return n.enabledDates=X(e),n.disabledDates=!1,L(),f},f.daysOfWeekDisabled=function(e){if(0===arguments.length)return n.daysOfWeekDisabled.splice(0);if("boolean"==typeof e&&!e)return n.daysOfWeekDisabled=!1,L(),f;if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(n.daysOfWeekDisabled=e.reduce(function(e,t){return(t=parseInt(t,10))>6||t<0||isNaN(t)?e:(-1===e.indexOf(t)&&e.push(t),e)},[]).sort(),n.useCurrent&&!n.keepInvalid){for(var t=0;!A(r,"d");){if(r.add(1,"d"),31===t)throw"Tried 31 times to find a valid date";t++}W(r)}return L(),f},f.maxDate=function(e){if(0===arguments.length)return n.maxDate?n.maxDate.clone():n.maxDate;if("boolean"==typeof e&&!1===e)return n.maxDate=!1,L(),f;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=M()));var t=V(e);if(!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e);if(n.minDate&&t.isBefore(n.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+t.format(d));return n.maxDate=t,n.useCurrent&&!n.keepInvalid&&r.isAfter(e)&&W(n.maxDate),i.isAfter(t)&&(i=t.clone().subtract(n.stepping,"m")),L(),f},f.minDate=function(e){if(0===arguments.length)return n.minDate?n.minDate.clone():n.minDate;if("boolean"==typeof e&&!1===e)return n.minDate=!1,L(),f;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=M()));var t=V(e);if(!t.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e);if(n.maxDate&&t.isAfter(n.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+t.format(d));return n.minDate=t,n.useCurrent&&!n.keepInvalid&&r.isBefore(e)&&W(n.minDate),i.isBefore(t)&&(i=t.clone().add(n.stepping,"m")),L(),f},f.defaultDate=function(e){if(0===arguments.length)return n.defaultDate?n.defaultDate.clone():n.defaultDate;if(!e)return n.defaultDate=!1,f;"string"==typeof e&&(e="now"===e||"moment"===e?M():M(e));var t=V(e);if(!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e);if(!A(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return n.defaultDate=t,(n.defaultDate&&n.inline||""===o.val().trim())&&W(n.defaultDate),f},f.locale=function(e){if(0===arguments.length)return n.locale;if(!a.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!");return n.locale=e,r.locale(n.locale),i.locale(n.locale),d&&_(),y&&(z(),U()),f},f.stepping=function(e){return 0===arguments.length?n.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),n.stepping=e,f)},f.useCurrent=function(e){var t=["year","month","day","hour","minute"];if(0===arguments.length)return n.useCurrent;if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof e&&-1===t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "));return n.useCurrent=e,f},f.collapse=function(e){if(0===arguments.length)return n.collapse;if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter");return n.collapse===e?f:(n.collapse=e,y&&(z(),U()),f)},f.icons=function(e){if(0===arguments.length)return t.extend({},n.icons);if(!(e instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return t.extend(n.icons,e),y&&(z(),U()),f},f.tooltips=function(e){if(0===arguments.length)return t.extend({},n.tooltips);if(!(e instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return t.extend(n.tooltips,e),y&&(z(),U()),f},f.useStrict=function(e){if(0===arguments.length)return n.useStrict;if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter");return n.useStrict=e,f},f.sideBySide=function(e){if(0===arguments.length)return n.sideBySide;if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter");return n.sideBySide=e,y&&(z(),U()),f},f.viewMode=function(e){if(0===arguments.length)return n.viewMode;if("string"!=typeof e)throw new TypeError("viewMode() expects a string parameter");if(-1===w.indexOf(e))throw new TypeError("viewMode() parameter must be one of ("+w.join(", ")+") value");return n.viewMode=e,p=Math.max(w.indexOf(e),g),q(),f},f.toolbarPlacement=function(e){if(0===arguments.length)return n.toolbarPlacement;if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===D.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of ("+D.join(", ")+") value");return n.toolbarPlacement=e,y&&(z(),U()),f},f.widgetPositioning=function(e){if(0===arguments.length)return t.extend({},n.widgetPositioning);if("[object Object]"!=={}.toString.call(e))throw new TypeError("widgetPositioning() expects an object variable");if(e.horizontal){if("string"!=typeof e.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(e.horizontal=e.horizontal.toLowerCase(),-1===k.indexOf(e.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+k.join(", ")+")");n.widgetPositioning.horizontal=e.horizontal}if(e.vertical){if("string"!=typeof e.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(e.vertical=e.vertical.toLowerCase(),-1===v.indexOf(e.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+v.join(", ")+")");n.widgetPositioning.vertical=e.vertical}return L(),f},f.calendarWeeks=function(e){if(0===arguments.length)return n.calendarWeeks;if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return n.calendarWeeks=e,L(),f},f.showTodayButton=function(e){if(0===arguments.length)return n.showTodayButton;if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");return n.showTodayButton=e,y&&(z(),U()),f},f.showClear=function(e){if(0===arguments.length)return n.showClear;if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter");return n.showClear=e,y&&(z(),U()),f},f.widgetParent=function(e){if(0===arguments.length)return n.widgetParent;if("string"==typeof e&&(e=t(e)),null!==e&&"string"!=typeof e&&!(e instanceof t))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return n.widgetParent=e,y&&(z(),U()),f},f.keepOpen=function(e){if(0===arguments.length)return n.keepOpen;if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter");return n.keepOpen=e,f},f.focusOnShow=function(e){if(0===arguments.length)return n.focusOnShow;if("boolean"!=typeof e)throw new TypeError("focusOnShow() expects a boolean parameter");return n.focusOnShow=e,f},f.inline=function(e){if(0===arguments.length)return n.inline;if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter");return n.inline=e,f},f.clear=function(){return N(),f},f.keyBinds=function(e){return 0===arguments.length?n.keyBinds:(n.keyBinds=e,f)},f.getMoment=function(e){return M(e)},f.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter");return n.debug=e,f},f.allowInputToggle=function(e){if(0===arguments.length)return n.allowInputToggle;if("boolean"!=typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter");return n.allowInputToggle=e,f},f.showClose=function(e){if(0===arguments.length)return n.showClose;if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter");return n.showClose=e,f},f.keepInvalid=function(e){if(0===arguments.length)return n.keepInvalid;if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");return n.keepInvalid=e,f},f.datepickerInput=function(e){if(0===arguments.length)return n.datepickerInput;if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter");return n.datepickerInput=e,f},f.parseInputDate=function(e){if(0===arguments.length)return n.parseInputDate;if("function"!=typeof e)throw new TypeError("parseInputDate() sholud be as function");return n.parseInputDate=e,f},f.disabledTimeIntervals=function(e){if(0===arguments.length)return n.disabledTimeIntervals?t.extend({},n.disabledTimeIntervals):n.disabledTimeIntervals;if(!e)return n.disabledTimeIntervals=!1,L(),f;if(!(e instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return n.disabledTimeIntervals=e,L(),f},f.disabledHours=function(e){if(0===arguments.length)return n.disabledHours?t.extend({},n.disabledHours):n.disabledHours;if(!e)return n.disabledHours=!1,L(),f;if(!(e instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(n.disabledHours=$(e),n.enabledHours=!1,n.useCurrent&&!n.keepInvalid){for(var a=0;!A(r,"h");){if(r.add(1,"h"),24===a)throw"Tried 24 times to find a valid date";a++}W(r)}return L(),f},f.enabledHours=function(e){if(0===arguments.length)return n.enabledHours?t.extend({},n.enabledHours):n.enabledHours;if(!e)return n.enabledHours=!1,L(),f;if(!(e instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(n.enabledHours=$(e),n.disabledHours=!1,n.useCurrent&&!n.keepInvalid){for(var a=0;!A(r,"h");){if(r.add(1,"h"),24===a)throw"Tried 24 times to find a valid date";a++}W(r)}return L(),f},f.viewDate=function(e){if(0===arguments.length)return i.clone();if(!e)return i=r.clone(),f;if(!("string"==typeof e||a.isMoment(e)||e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return i=V(e),B(),f},e.is("input"))o=e;else if(0===(o=e.find(n.datepickerInput)).length)o=e.find("input");else if(!o.is("input"))throw new Error('CSS class "'+n.datepickerInput+'" cannot be applied to non input element');if(e.hasClass("input-group")&&(m=0===e.find(".datepickerbutton").length?e.find(".input-group-addon"):e.find(".datepickerbutton")),!n.inline&&!o.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return r=M(),i=r.clone(),t.extend(!0,n,(u={},(c=e.is("input")||n.inline?e.data():e.find("input").data()).dateOptions&&c.dateOptions instanceof Object&&(u=t.extend(!0,u,c.dateOptions)),t.each(n,function(e){var t="date"+e.charAt(0).toUpperCase()+e.slice(1);void 0!==c[t]&&(u[e]=c[t])}),u)),f.options(n),_(),o.on({change:K,blur:n.debug?"":z,keydown:Q,keyup:J,focus:n.allowInputToggle?U:""}),e.is("input")?o.on({focus:U}):m&&(m.on("click",G),m.on("mousedown",!1)),o.prop("disabled")&&f.disable(),o.is("input")&&0!==o.val().trim().length?W(V(o.val().trim())):n.defaultDate&&void 0===o.attr("placeholder")&&W(n.defaultDate),n.inline&&U(),f};return t.fn.datetimepicker=function(e){e=e||{};var a,r=Array.prototype.slice.call(arguments,1),i=!0;if("object"==typeof e)return this.each(function(){var a,r=t(this);r.data("DateTimePicker")||(a=t.extend(!0,{},t.fn.datetimepicker.defaults,e),r.data("DateTimePicker",n(r,a)))});if("string"==typeof e)return this.each(function(){var n=t(this).data("DateTimePicker");if(!n)throw new Error('bootstrap-datetimepicker("'+e+'") method was called on an element that is not using DateTimePicker');a=n[e].apply(n,r),i=a===n}),i||t.inArray(e,["destroy","hide","show","toggle"])>-1?this:a;throw new TypeError("Invalid arguments for DateTimePicker: "+e)},t.fn.datetimepicker.defaults={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:a.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m"))}},down:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m"))}else this.show()},"control up":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h"))}},"control down":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h"))}},left:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d"))}},right:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d"))}},pageUp:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e&&e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},delete:function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},t.fn.datetimepicker.DateTimePicker=n,e.attach("intg.datetimepicker",t.fn.datetimepicker)});
//# sourceMappingURL=sourcemaps/datetimepicker.js.map
