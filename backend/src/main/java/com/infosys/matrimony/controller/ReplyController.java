package com.infosys.matrimony.controller;

import com.infosys.matrimony.entity.Reply;
import com.infosys.matrimony.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/reply")
public class ReplyController {
    @Autowired
    private ReplyService replyService;

    @PostMapping("/")
    public ResponseEntity<Reply> createReply(@RequestBody Reply reply) {
        Reply savedReply= replyService.saveReply(reply);
        return ResponseEntity.ok(savedReply);
    }

    @GetMapping("/get/")
    public ResponseEntity<List<Reply>> getAllReply() {
        List<Reply> replies = replyService.getAllReply();
        return ResponseEntity.ok(replies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reply> getReplyById(@PathVariable Long id) {
        Optional<Reply> reply = replyService.getReplyById(id);
        return reply.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<List<Reply>> getReplyByEmail(@PathVariable String email) {
        List<Reply> replies = replyService.getReplyByEmail(email);
        if (replies.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(replies);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reply> updateReply(@PathVariable Long id, @RequestBody Reply reply) {
        try {
            Reply updatedReply = replyService.updateReply(id, reply);
            return ResponseEntity.ok(updatedReply);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReply(@PathVariable Long id) {
        replyService.deleteReply(id);
        return ResponseEntity.noContent().build();
    }
}
