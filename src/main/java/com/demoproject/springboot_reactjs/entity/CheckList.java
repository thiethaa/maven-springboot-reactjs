package com.demoproject.springboot_reactjs.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@ToString
public class CheckList {
    @Id
    private String Id;
    private boolean sendQuestionnaire;
    private boolean createHubPage;
    private boolean scheduleDeepDiveMeeting;
    private boolean determineCustomer;
    private boolean disscussAddons;
    private  boolean proxySetting;
    private boolean trendExport;
    private boolean explainCloudMigrationTool;
    private boolean networking;
    private boolean changeCloud;
    private boolean actionUi;
    private boolean patching;
    private boolean siteBuilder;
    private boolean workArounds;
    private boolean sourceTrees;
    private boolean gap;
    private boolean coming;
    private boolean passwordNotify;
    private boolean methodToMinimize;
    private boolean determineNetworking;
    private boolean changeRoute;
    private boolean testingValidation;
    private boolean targetDates;
    private boolean addmember;
}
