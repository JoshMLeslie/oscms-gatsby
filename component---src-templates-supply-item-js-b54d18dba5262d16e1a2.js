(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qSmz:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return c}));var i=t("q1tI"),r=t.n(i),a=t("Wbzz"),l=t("wG+1"),s=t("Knq1"),c={id:"3740511170",source:"\nquery SupplyItemQuery($id: String) {\n  prismic{\n    allMedical_supply_item_detaileds(id: $id){\n      edges{\n        node{\n          _meta{\n            id\n            type\n          }\n          item_title\n          item_image\n          the_problem\n          current_us_resources\n          worst_case_expectation\n          why_well_need_it\n          why_we_wont_need_it\n          engineering_requirements\n          assembly_fabrication_requirements\n          projects_resources\n          reviewed_designs_intro\n          reviewed_designs_item {\n            project_name\n            date_reviewed\n            reviewed_by\n            note\n          }\n          not_recommended_design_item {\n            project_name\n            reviewed_by\n            reason\n          }\n        }\n      }\n    }\n  }\n}\n",toString:function(){return this.id}},d=function(e){var n=e.supplyItem;return r.a.createElement("div",null,r.a.createElement("div",{className:"container post-header"},r.a.createElement("div",{className:"back"},r.a.createElement(a.Link,{to:"/"},"back to list")),r.a.createElement("h1",{"data-wio-id":n._meta.id},l.RichText.asText(n.item_title)),r.a.createElement("h2",null,"The Problem"),r.a.createElement("div",null,l.RichText.asText(n.the_problem)),r.a.createElement("h2",null,"Current Resources"),r.a.createElement("div",null,l.RichText.asText(n.current_us_resources)),r.a.createElement("img",{src:n.item_image.url})))};n.default=function(e){var n=e.data.prismic.allMedical_supply_item_detaileds.edges.slice(0,1).pop();return n?r.a.createElement(s.a,null,r.a.createElement(d,{supplyItem:n.node})):null}}}]);
//# sourceMappingURL=component---src-templates-supply-item-js-b54d18dba5262d16e1a2.js.map