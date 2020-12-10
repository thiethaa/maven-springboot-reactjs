package com.demoproject.springboot_reactjs.service;

import com.demoproject.springboot_reactjs.entity.CheckList;
import com.demoproject.springboot_reactjs.repository.CheckListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CheckListServiceImpl implements CheckListService {
    @Autowired
    CheckListRepository checkListRepository;

    @Override
    public List<CheckList> getMeetingCheckList() {
        return checkListRepository.findAll();
    }

    @Override
    public CheckList getMeetingChecklistById(String id) {
        Optional<CheckList> existData = checkListRepository.findById(id);
        CheckList ch = null;
        if(existData.isPresent()){
            ch = existData.get();
        }
        return ch;
    }

    @Override
    public CheckList addNewMeetingChecklist(CheckList ch) {
        CheckList newCh = new CheckList();
        newCh.setId(ch.getId());
        newCh.setSendQuestionnaire(ch.isSendQuestionnaire());
        newCh.setCreateHubPage(ch.isCreateHubPage());
        newCh.setScheduleDeepDiveMeeting(ch.isScheduleDeepDiveMeeting());
        newCh.setDetermineCustomer(ch.isDetermineCustomer());
        newCh.setDisscussAddons(ch.isDisscussAddons());
        newCh.setProxySetting(ch.isProxySetting());
        newCh.setTrendExport(ch.isTrendExport());
        newCh.setExplainCloudMigrationTool(ch.isExplainCloudMigrationTool());
        newCh.setNetworking(ch.isNetworking());
        newCh.setChangeCloud(ch.isChangeCloud());
        newCh.setActionUi(ch.isActionUi());
        newCh.setPatching(ch.isPatching());
        newCh.setSiteBuilder(ch.isSiteBuilder());
        newCh.setWorkArounds(ch.isWorkArounds());
        newCh.setSourceTrees(ch.isSourceTrees());
        newCh.setGap(ch.isGap());
        newCh.setComing(ch.isComing());
        newCh.setPasswordNotify(ch.isPasswordNotify());
        newCh.setMethodToMinimize(ch.isMethodToMinimize());
        newCh.setDetermineNetworking(ch.isDetermineNetworking());
        newCh.setChangeRoute(ch.isChangeRoute());
        newCh.setTestingValidation(ch.isTestingValidation());
        newCh.setTargetDates(ch.isTargetDates());
        newCh.setAddmember(ch.isAddmember());
        checkListRepository.save(newCh);
        return newCh;
    }

    @Override
    public CheckList editExistingMeetingCheckList(CheckList ch, String id) {
        Optional<CheckList> existData = checkListRepository.findById(id);
        CheckList newCh = null;
        if(existData.isPresent()){
            newCh = existData.get();
            newCh.setId(ch.getId());
            newCh.setSendQuestionnaire(ch.isSendQuestionnaire());
            newCh.setCreateHubPage(ch.isCreateHubPage());
            newCh.setScheduleDeepDiveMeeting(ch.isScheduleDeepDiveMeeting());
            newCh.setDetermineCustomer(ch.isDetermineCustomer());
            newCh.setDisscussAddons(ch.isDisscussAddons());
            newCh.setProxySetting(ch.isProxySetting());
            newCh.setTrendExport(ch.isTrendExport());
            newCh.setExplainCloudMigrationTool(ch.isExplainCloudMigrationTool());
            newCh.setNetworking(ch.isNetworking());
            newCh.setChangeCloud(ch.isChangeCloud());
            newCh.setActionUi(ch.isActionUi());
            newCh.setPatching(ch.isPatching());
            newCh.setSiteBuilder(ch.isSiteBuilder());
            newCh.setWorkArounds(ch.isWorkArounds());
            newCh.setSourceTrees(ch.isSourceTrees());
            newCh.setGap(ch.isGap());
            newCh.setComing(ch.isComing());
            newCh.setPasswordNotify(ch.isPasswordNotify());
            newCh.setMethodToMinimize(ch.isMethodToMinimize());
            newCh.setDetermineNetworking(ch.isDetermineNetworking());
            newCh.setChangeRoute(ch.isChangeRoute());
            newCh.setTestingValidation(ch.isTestingValidation());
            newCh.setTargetDates(ch.isTargetDates());
            newCh.setAddmember(ch.isAddmember());
            checkListRepository.save(newCh);
        }
        return newCh;
    }

    @Override
    public void deleteMeetingCheckList(String id) {
        checkListRepository.deleteById(id);
    }
}
